### Do I have to pay for updates?
No. If you have bought it already then all future updates are included for free (Royalty Free). To get the new version
of the addon go to the store you made your purchase (either 
[BlenderMarket](https://blendermarket.com/products/physical-starlight-and-atmosphere) or
[Gumroad](https://gumroad.com/l/PSaA)) and grab the latest version. For more information see [updating](/psa/updating/) procedure.

### _Physical Starlight and Atmosphere_ is not installing!      
- Please remove the old addon folder before [installing](/psa/getting-started/#installation) a new version.
- Do not try to install it on the Blender install directory itself.
*bad example*: `C:\ProgramFiles\Blender Foundation\Blender\2.XX\scripts\addons`. You can find correct path to install
the addon [here](/psa/updating).
- On Macs, browser (or Finder?) sometimes automatically unzips .zip files. You need to install the .zip file!

### _Physical Starlight and Atmosphere_ won't enable!
- Try reopening Blender.
- Check [_First Run_](/psa/getting-started/#first-run) section for a guidance. 
- _Physical Starlight and Atmosphere_ only works with Blender 2.8 and above.

### I use Cycles and see fireflies (strange white artifacts)
Fireflies are abnormally bright pixels relative to their surroundings. Unfortunately using Cycles in combination with scenes that have low light levels will cause fireflies. This effect
can be avoided by increasing samples (Render properties > Sampling) or using Super Image Denoiser. For more detailed
information see [this issue](https://github.com/PhysicalAddons/physical-starlight-and-atmosphere/issues/22).


!!! info "Didn't find your answer?"
    Check out this [Awesome community driven forum thread](https://blenderartists.org/t/physical-starlight-and-atmosphere-addon-for-2-8-v1-1/1185314)
    for more help. If you think that you might have found a new bug go to [Issue tracker](https://github.com/PhysicalAddons/physical-starlight-and-atmosphere/issues)
    to see if it hasn't been already reported or in a process of fixing.


