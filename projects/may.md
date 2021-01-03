---
title: May
description: Age verification module for entering online store.
descIntro: Knuckleheads.
date: 2020-05-01
layout: layouts/may
---

## Its 5/11 and I'm late.

I'm a little late to this one. Its been a real crazy 11 days. I'll probably try to develop the Knuckleheads still guide here.

I'm also going to work on some age verification JS.

Here is the idea for the popup, on load, a css modal will popup. There will be no close option. The form will contain a date selection field and a submit button. The user must select a date that is at least 18 years in the past. On submit, it will verify that date. If it meets the criteria, the popup will go away and a local storage var will be saved. If not, an error message will display for 10 seconds then take them back to their previous page.
