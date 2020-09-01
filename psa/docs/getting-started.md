---
title: Getting started
---

# Getting started

_Physical Starlight and Atmosphere_  is a Blender addon for advanced environmental lighting that provides high quality atmospherics
and lighting, and visual consistency between every object in your scene. It can be installed as any other Blender addon.
## Requirements

Latest _Physical Starlight and Atmosphere v1.2_ is supported by [Blender 2.81+](https://www.blender.org/). Older
versions of addon (v1.0 and v1.1) works also on [Blender 2.80](https://www.blender.org/) .

## Installation

!!! info
    "Physical Starlight and Atmopshere" is only available for purchase on
    [Blendermarket](https://blendermarket.com/products/physical-starlight-and-atmosphere) or [Gumroad](https://gumroad.com/l/PSaA).
    Get your latest version there.

- Download the "physical-starlight-atmosphere-[version here].zip" file.
- Open Blender.
- Go to Edit/Preferences. 
- Choose "Add-ons" tab and press "Install..." button. 
- Locate the .zip file and press "Install Add-on".
- You will see the newly installed add-on, enable it by checking the checkbox. 
- Wait till it registers. Voila!

## First Run
- Locate _Physical Starlight and Atmosphere_ panel in [Sidebar](https://docs.blender.org/manual/en/latest/interface/window_system/regions.html#sidebar)
(also called _N Panel_). Click on the tab _Atmosphere_ to reveal it.
- Enable addon by ticking the uppermost checkbox _Atmosphere_.


!!! important
    To see the sky, you have to be in "Rendered" Viewport Shading mode (click on the 4th sphere in the list up in the right corner of 3D viewport)

[![First Run](img/first-run.png)](img/first-run.png)

!!! summary "What happens when addon is being enabled/disabled?"
    - Default world shader node is replaced with "StarlightAtmosphere" node. When you uncheck the _Physical Atmosphere_ checkbox, it will be set back to the default world.
    - Sun lamp `Sarlight Sun` is added. The Sun lamp is used as the main light source to cast shadows from the Sun. When you uncheck the _Physical Atmosphere_ checkbox, it will be removed.

## Troubleshooting

Something didn't work as expected? Check out [Frequently Asked Questions](/psa/faq/). 








