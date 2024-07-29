??? cite "Do I have to pay for updates?"
    No. If you have bought it already then all future updates are included for free. To get the new version
    of the add-on go to the store you made your purchase (either 
    [Blender Market](https://blendermarket.com/products/physical-starlight-and-atmosphere) or
    [Gumroad](https://gumroad.com/l/PSaA)) and grab the latest version.

??? cite "Everything looks blown-out (all white)! What am I missing?"
    Most probobly you have enabled an advanced feature that enables usage of [physical values](/psa/getting-started/#preferences). This feature is meant for users that work with photography tools or want that extra detail. This requires a bit more fiddling but require to manually adjust exposure settings. This [forum reply](https://blenderartists.org/t/physical-starlight-and-atmosphere-addon-for-2-9-v1-4-now-with-clouds/1185314/516) may give more insight what it is all about. To make it look "normal" uncheck the `use real world physical values` option in the add-on preferences.

??? cite "What is the difference between [Nishita sky](https://www.blender.org/download/releases/2-90/) texture and this add-on?"
    'Nishita Sky' is one of many mathematical methods of rendering Earth's atmosphere in daylight.
    It is an analytical model meaning it uses color and luminance values measured during daylight by scientists on Earth.
    Its advantage is that it is simple and fast and delivers realistic renders on ground level during the daytime.
    Disadvantages:

    - it only works in Cycles for now (no Eevee support)
    - No full day/night cycle
    - no correct appearance above the ground level
    - only works for limited weather conditions on Earth

    PSA on the other hand uses a procedural method of calculating the atmosphere based on many modifiable parameters.
    So it does not limit the sky color to only Earth's atmosphere. It has a full day/night cycle and looks correct above ground
    level. And it has object fog included. PSA works in Eevee render as well as Cycles.

??? cite "Why is _Physical Starlight and Atmosphere_ not installing?"      
    - Try removing the old add-on folder before [installing](/psa/getting-started/#installation) a new version.
    - Do not try to install it on the Blender install directory itself.
    *bad example*: `C:\ProgramFiles\Blender Foundation\Blender\2.XX\scripts\addons`. You can find correct path to install
    the add-on [here](/psa/updating).
    - On Macs, Finder sometimes automatically unzips .zip files. You need to install the .zip file.

??? cite "Why won't _Physical Starlight and Atmosphere_ enable?"
    - Try reopening Blender.
    - Check [_First Run_](/psa/getting-started/#first-run) section for a guidance. 
    - _Physical Starlight and Atmosphere_ only works with Blender 2.8 and above.

??? cite "I use Cycles and see fireflies (strange white artifacts)"
    Fireflies are abnormally bright pixels relative to their surroundings. Unfortunately using Cycles in combination with scenes that have low light levels will cause     fireflies. This effect can be avoided by increasing samples (Render properties > Sampling) or using Super Image Denoiser. For more detailed information see [this       issue](https://github.com/PhysicalAddons/physical-starlight-and-atmosphere/issues/22).


!!! info 
    Visit our community support [Discord channel](https://discord.com/invite/wvzPVzj9Vr) for more help.
    
