


## Interface

Take a deep breath and have a look at the user interface. At first addon, interface may look a bit complex. It is due to many tweakable parameters and fancy names like Kelvins, radiance, and absorption that we use those to standardize variable names.

## General controls

* [Sun]()
* [Atmosphere]()
* [Stars]()
* [Clouds]()
* [Object fog]()
* [Ground]()


## Sun


<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>HORIZONTAL ROTATION - horizontal movement of the sun.</div>
    </div>
    <div>
        <video width="256" height="128" autoplay loop>
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>VERTICAL ROTATION - vertical movement of the sun.</div>
    </div>
    <div>
        <video width="250" height="125" autoplay loop>
            <source src="../img/vertical256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>SUN DISK - choose to see a physical sun disk in the sky</div>
    </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>SUN LAMP - whether to use a sun lamp or sun disk in the world for illumination. </div>
        <div margin-top: 8px;">
            <div style="color: rgba(0,0,0,0.54)">
            Enabling this will ensure that there are sun shadows present in Eevee, as well as potentially help Cycles render quicker by requiring slightly fewer samples. Disabling this will mostly benefit Cycles renders, where the result will be more accurate with better matching reflections.
            </div>
        </div>
    </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>ANGULAR DIAMETER - the size of the sun disk.</div>
        <div margin-top: 8px;">
            <div style="color: rgba(0,0,0,0.54)">
            Affects shadow and lighting softness and the visual appearance of the sun disk.
            </div>
        </div>
    </div>
    <div>
        <video width="250" height="125" autoplay loop>
            <source src="../img/ang_diameter_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>TEMPERATURE K - physical temperature (in Kelvins) of the sun changes the color of the sun disk.</div>
        <div margin-top: 8px;">
            <div style="color: rgba(0,0,0,0.54)">
            The bigger the value, the bluer the sun.
            </div>
        </div>
    </div>
    <div>
        <video width="250" height="125" autoplay loop>
            <source src="../img/temperature_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>INTENSITY - intensity of the sun emission.</div>
        <div margin-top: 8px;">
            <div style="color: rgba(0,0,0,0.54)">
            Higher intensity makes the sun brighter, thus illuminating the scene more.
            </div>
        </div>
    </div>
    <div>
        <video width="250" height="125" autoplay loop>
            <source src="../img/intensity_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>BINARY SUN - a second sun that is bound to the main sun.</div>
    </div>
</div>

## Binary Sun

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>DISTANCE - distance from the main sun.</div>
    </div>
    <div>
        <video width="250" height="125" autoplay loop>
            <source src="../img/400x800.mp4" type="video/mp4">
        </video>
    </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>PHASE - the angle at which the binary sun is placed relative to the main sun.</div>
    </div>
    <div>
        <video width="250" height="125" autoplay loop>
            <source src="../img/400x800.mp4" type="video/mp4">
        </video>
    </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>ANGULAR DIAMETER - the size of the binary sun disc.</div>
    </div>
    <div>
        <video width="250" height="125" autoplay loop>
            <source src="../img/400x800.mp4" type="video/mp4">
        </video>
    </div>
</div>

<div style="display: flex; justify-content:space-between; margin-bottom: 32px">
    <div style="margin-right: 16px">
        <div>INTENSITY - Intensity of the binary sun emission.</div>
        <div margin-top: 8px;">
            <div style="color: rgba(0,0,0,0.54)">
            Changes the binary sun radiance intensity in Watt·sr/m2.
            </div>
        </div>
    </div>
    <div>
        <video width="250" height="125" autoplay loop>
            <source src="../img/400x800.mp4" type="video/mp4">
        </video>
    </div>
</div>

## Atmosphere