Presets allow to store a snapshot of your customized atmosphere settings and return to it later
or use already predefined presets provided by the addon.

!!! info
    Presets are introduced in [v1.3.0](/psa/release-notes/#130-released-13112020). Till then default values were the
    current values of the _Earth_ preset.


## Good to know
* You can store presets with or without `azimuth` and `elevation` properties. This allows creating 2 kinds of presets: 
    * sun position based (e.g. _Early morning_, _Foggy night_, etc.)
    * atmosphere based (e.g. _Titan Atmosphere_, _Big Sun_, etc.)
* There are 4 presets offered by addon - _Earth_, _Mars_, _Nishita_ and _Retrowave_.
    * These are prefixed by `·` _(e.g. · Mars)_ and always located at the bottom of the preset list.
    * If deleted, after re-enabling the addon they will be available again.
* Whenever Blender is newly loaded or any preset gets deleted, `· Earth` is set as a default world.
* Resetting sets properties to _selected preset_ default values.

### How to reset?
* To _reset single property_, hover on it and press ++backspace++ (Blender default behavior)
* To _reset section_ of properties to their defaults, click on the `reset` button in the bottom right corner
of the property set (this doesn't reset `azimuth` and `elevation`).
