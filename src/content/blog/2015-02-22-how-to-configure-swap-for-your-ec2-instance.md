---
title: How to configure swap for your EC2 instance
image: "/wp-content/uploads/2015/05/swap.jpg"
pubDate: 2015-02-22
author: "Travis Carlson"
profile: "/team/travis.jpg"
type: "Article"
brief: "Instructions for configuring swap memory on an EC2 instance"
tags: ["AWS","SysAdmin","EC2","Swap"]
---
Every time I fire up a new EC2 instance, I inevitably forget to configure swap memory for it (<a href="http://www.quora.com/Why-dont-Amazon-EC2-microinstances-come-preconfigured-with-swap" target="_blank">why don't they just come pre-configured?</a>) only to realize it later when some application experiences sudden death at the hands of a (shriek!) OutOfMemoryError.  I've gotten pretty quick at configuring this, and thought I'd share the recipe.  
\
The following instructions are for an EC2 instance running <a href="http://aws.amazon.com/amazon-linux-ami/" target="_blank">Amazon Linux</a> (which is basically CentOS).  They will probably work for any RedHat-based distro.  
\
First of all, check to see if you already have swap configured:
```
$ free
             total       used       free     shared    buffers     cached
Mem:       7697592    7653364      44228        260        988      88732
-/+ buffers/cache:    7563644     133948
Swap:            0          0          0
```
If the "Swap" section is 0, then you obviously do not and you will need to configure it.  
\
Depending on your <a href="http://aws.amazon.com/ec2/instance-types/" target="_blank">instance type</a>, you may or may not have "instance storage" (also called "ephemeral storage"). If you do, this is an ideal place to have your swap space because it's fast, "close" to your OS and it gets obliterated if you ever need to stop your instance (so it's only good for transient data anyways).  
\
If you have instance storage available, it should be visible as a storage device in addition to any EBS volumes you have attached:
```
$ ls /dev/sd*
/dev/sda1  /dev/sdb  /dev/sdc
``` 
_(in this case, sda1 is my root (OS) volume, sdb is my data (EBS) volume, and sdc is my instance storage (swap)._  
\
If you do have instance storage and wish to use it as a swap partition,
```
mkswap /dev/sdc
swapon -va
```
\
If you do not have instance storage (or don't want to use the whole thing for swap), you'll need to create a swap file instead:
```
dd if=/dev/zero of=/var/swapfile bs=1M count=2048
chmod 0600 /var/swapfile
mkswap /var/swapfile
swapon -va
```
_(this means 2048 blocks @ 1Mb/block = 2Gb)_  
\
Then to make sure your swap gets turned on again after reboot, add a line to your `/etc/fstab`:
```
/dev/sdc   none     swap    sw     0 0
``` 
or
```
/var/swapfile   none     swap    sw     0 0
```
\
To verify that your swap is now indeed available:
```
$ free
             total       used       free     shared    buffers     cached
Mem:       7697592    7653364      44228        260        988      88732
-/+ buffers/cache:    7563644     133948
Swap:        30712        617      30095
```
\
In case this didn't do the trick, here are the <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#InstanceStoreSwapVolumes" target="_blank">official instructions from Amazon</a>.
