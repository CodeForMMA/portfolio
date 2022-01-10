---
title: Vagrant an Introduction 
date: 2021-06-21
excerpt: What is vagrant?
tags: ["vagrant","introduction","Virtualbox"]
---

# Vagrant

## What is Vagrant?

- [Documentation](https://www.vagrantup.com/docs/index.html)

> Command line utility for managing the lifecycle of virtual machines

## VagrantFile 

- Marks the directory of your project
- What kind of machine and resources are needed for your project

## Boxes

- Virtual Machines are slow and tedious 
    - Base images are faster to clone a VM
    - Base images are known as Boxes

- Adding boxes to vagrant
    - `vagrant box add`

- Boxes are globally stored for the current user, each box uses an initial image to clone from. 
    - Two projects using the same box can be modified independently. 

- [More Boxes](https://app.vagrantup.com/boxes/search)

## Connecting

- To connect to the VM
    - `vagrant ssh`

- To terminate the VM
    - `vagrant destory`

## Provisioning 

- You can download and startup services when you `vagrant up` 
    - Instead of downloading them on startup 

## Teardown

- Suspending the Machine
    - `vagrant suspend`
    - Will save the current running state of the machine and stop it. 
    - Will eat up disk space and will require disk space to store all the virtual machine RAM

- Halting
    - `vagrant halt`
    - Gracefully shut down, and power down the guest machine.
    - Will still consume disk space

- Destroying
    - `vagrant destory`
    - Will power down, and remove all instances of the guest machine from the host
    - Host machine will be left clean 

## Running with GUI

- [Documentation](https://www.vagrantup.com/docs/virtualbox/configuration.html)

## Transfering files using SCP

- Alternative way compared to using shared files
    - [Documenation](https://howtoprogram.xyz/2017/08/13/copy-files-folders-host-guest-vagrant/)
- What is SCP?
    - [Documenation](https://www.computerhope.com/unix/scp.htm)

## Setting up Python

- [Documenation](https://www.digitalocean.com/community/tutorials/how-to-install-python-3-and-set-up-a-local-programming-environment-on-ubuntu-16-04)

