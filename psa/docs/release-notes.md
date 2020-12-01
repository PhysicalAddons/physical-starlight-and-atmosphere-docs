### 1.3.0 <small>- released 13.11.2020</small>
[![Release 1.3.0 banner](img/releases/psa1.3.0.png)](img/releases/psa1.3.0.png)

`new:`{: .label-new }   

- Added ability to add or remove Presets (snapshot of your customized atmosphere settings).
- Added 4 presets (_Earth, Mars, Nishita and Retrowave_) that comes default with the addon installation.
- Added `Binary Sun` (secondary sun) that can be rotated around the `Sun`. For more information check section
[Experimental Features](/psa/customization/#experimental-features)

`improvements:`{: .label-improvements }   

- Now `sun intensity` stays consistent even when increasing `sun radius`.
- `azimuth` and `elevation` slider sensitivity increased
- Improve `ground color` accuracy. Now setting it to black will really mean it's black.


`fixed:`{: .label-fixed }

- Fixed an issue when sun was located near horizon the sun color were washed out.  

### 1.2.3 <small>- released 20.08.2020</small>

`fixed:`{: .label-fixed }

- Fixed an issue where `Toggle Meterial Fog` button sometimes appears active when it isn't.
- Fixed an issue where when disabling addon didn't delete all Sun data and left some garbage behind. {[#1](https://github.com/PhysicalAddons/physical-starlight-and-atmosphere/issues/1)}
- Fixed an issue where when rotating sun using gimbal it did a random jump. {[#6](https://github.com/PhysicalAddons/physical-starlight-and-atmosphere/issues/6)}
- Fixed an issue where when animating time using Sun Position addon gave the same frame in output. {[#7](https://github.com/PhysicalAddons/physical-starlight-and-atmosphere/issues/7)}

### 1.2.2 <small>- released 15.07.2020</small>

`new:`{: .label-new }   

- Addon now has preferences to enable or disable real world physical values (by default disabled).

`fixed:`{: .label-fixed }       

- Fixed an issue where disabling addon didn't reset the exposure to defaults {[#8](https://github.com/PhysicalAddons/physical-starlight-and-atmosphere/issues/8)}
- Fixed an issue where when starting the render exposure was being reset {[#11](https://github.com/PhysicalAddons/physical-starlight-and-atmosphere/issues/11)}  

