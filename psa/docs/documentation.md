

Take a deep breath and have a look at the user interface. At a glance, it may look a bit complex. It is due to many tweakable parameters and fancy names like *Kelvins*, *radiance*, and *absorption* that we use to standardize variable names.


* [Sun]()
* [Atmosphere]()
* [Stars]()
* [Clouds]()
* [Object fog]()
* [Ground]()


## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M9.492 2.996A.5.5 0 0 0 9 3.504v2.654a3.98 3.98 0 0 0-1.955 1.184L4.854 5.15a.5.5 0 1 0-.707.707l2.32 2.32A3.941 3.941 0 0 0 6 10.004H3.5c-.667 0-.667 1 0 1h2.64a3.98 3.98 0 0 0 1.192 1.96L5.146 15.15c-.471.472.236 1.18.708.708l2.316-2.317c.55.286 1.162.463 1.822.463H10v2.5c0 .667 1 .667 1 0v-2.646a3.982 3.982 0 0 0 1.953-1.194l2.194 2.194c.471.505 1.214-.237.707-.708l-2.325-2.324a3.934 3.934 0 0 0 .458-1.814v-.008H16.5c.667 0 .667-1 0-1h-2.66a3.983 3.983 0 0 0-1.186-1.947l2.2-2.2a.5.5 0 1 0-.708-.707l-2.33 2.33A3.942 3.942 0 0 0 10 6.018V3.504a.5.5 0 0 0-.508-.508zm.5 4.022a2.987 2.987 0 0 1 2.994 2.994 2.986 2.986 0 0 1-2.994 2.992A2.984 2.984 0 0 1 7 10.012a2.986 2.986 0 0 1 2.992-2.994z"/></svg></span> Sun

### Rotation
<div class="parameter">
    <div class="parameter__info">
        <div>Horizontal and vertical movement of the sun.</div><div style="color: rgba(0,0,0,.5)">Allow to position sun in specific position creating feeling that it is a morning, midday or an evening.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Sun disk
<div class="parameter">
    <div class="parameter__info">
        <div>Choose to see a physical sun disk in the sky</div><div style="color: rgba(0,0,0,.5)">Disk can be removed in a specific edge cases when sun disk in renders appears too bright.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="" type="video/mp4">
        </video>
    </div>
</div>


### Sun lamp
<div class="parameter">
    <div class="parameter__info">
        <div>Choose to use a sun lamp or sun disk in the world for illumination.</div><div style="color: rgba(0,0,0,.5)">Enabling this will ensure that there are sun shadows present in Eevee, as well as potentially help Cycles render quicker by requiring slightly fewer samples. Disabling this will mostly benefit Cycles renders, where the result will be more accurate with better matching reflections.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="" type="video/mp4">
        </video>
    </div>
</div>


### Angular diameter
<div class="parameter">
    <div class="parameter__info">
        <div>The size of the sun disk.</div><div style="color: rgba(0,0,0,.5)">Affects shadow and lighting softness and the visual appearance of the sun disk. </div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/ang_diameter_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Temperature K
<div class="parameter">
    <div class="parameter__info">
        <div>Physical temperature (in Kelvins) of the sun changes the color of the sun disk.</div><div style="color: rgba(0,0,0,.5)">The bigger the value, the bluer the sun.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/temperature_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Intensity
<div class="parameter">
    <div class="parameter__info">
        <div>Intensity of the binary sun emission.</div><div style="color: rgba(0,0,0,.5)">Higher intensity makes the sun brighter, thus illuminating the scene more.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/intensity_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Binary sun
<div class="parameter">
    <div class="parameter__info">
        <div>Enables a second sun that is bound to the main sun.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="" type="video/mp4">
        </video>
    </div>
</div>



## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M9.492 2.996A.5.5 0 0 0 9 3.504v2.654a3.98 3.98 0 0 0-1.955 1.184L4.854 5.15a.5.5 0 1 0-.707.707l2.32 2.32A3.941 3.941 0 0 0 6 10.004H3.5c-.667 0-.667 1 0 1h2.64a3.98 3.98 0 0 0 1.192 1.96L5.146 15.15c-.471.472.236 1.18.708.708l2.316-2.317c.55.286 1.162.463 1.822.463H10v2.5c0 .667 1 .667 1 0v-2.646a3.982 3.982 0 0 0 1.953-1.194l2.194 2.194c.471.505 1.214-.237.707-.708l-2.325-2.324a3.934 3.934 0 0 0 .458-1.814v-.008H16.5c.667 0 .667-1 0-1h-2.66a3.983 3.983 0 0 0-1.186-1.947l2.2-2.2a.5.5 0 1 0-.708-.707l-2.33 2.33A3.942 3.942 0 0 0 10 6.018V3.504a.5.5 0 0 0-.508-.508zm.5 4.022a2.987 2.987 0 0 1 2.994 2.994 2.986 2.986 0 0 1-2.994 2.992A2.984 2.984 0 0 1 7 10.012a2.986 2.986 0 0 1 2.992-2.994z"/></svg></span> Binary Sun

### Distance
<div class="parameter">
    <div class="parameter__info">
        <div>Distance from the main sun.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Phase
<div class="parameter">
    <div class="parameter__info">
        <div>The angle at which the binary sun is placed relative to the main sun.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Angular diameter
<div class="parameter">
    <div class="parameter__info">
        <div>The size of the binary sun disc.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Temperature K
<div class="parameter">
    <div class="parameter__info">
        <div>Physical temperature (in Kelvins) of the binary sun changes the color of the binary sun disk.</div><div style="color: rgba(0,0,0,.5)">The bigger the value, the bluer the sun.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/temperature_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Intensity
<div class="parameter">
    <div class="parameter__info">
        <div>Intensity of the binary sun emission.</div><div style="color: rgba(0,0,0,.5)">Changes the binary sun radiance intensity in Watt·sr/m2.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>



## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M16.492 2.994a.5.5 0 0 0-.344.15l-1.57 1.57a6.962 6.962 0 0 0-4.576-1.716c-3.86 0-7 3.14-7 7 0 1.75.65 3.35 1.715 4.578l-1.569 1.569a.5.5 0 1 0 .707.707l1.569-1.569a6.966 6.966 0 0 0 4.578 1.715c3.86 0 7-3.14 7-7 0-1.75-.651-3.347-1.717-4.576l1.57-1.57a.5.5 0 0 0-.363-.858zm-6.49 1.004c3.32 0 6 2.68 6 6s-2.68 6-6 6a5.992 5.992 0 0 1-5.467-8.467l.467.467 1 1v2h2v1l1 1v2h2l1-1 1-1v-1l-1-1h-3l-1-1h-1l1-1h1l2-2-1-1h-1l-1-1 .894-.894a6.043 6.043 0 0 1 1.106-.106z"/></svg></span> Atmosphere

### Density
<div class="parameter">
    <div class="parameter__info">
        <div>Control how much atmosphere is present on the planet.</div><div style="color: rgba(0,0,0,.5)">For example, 0 is the vacuum of the space, but 1.22 kg/m3 is the atmosphere density for the Earth.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Scale Height
<div class="parameter">
    <div class="parameter__info">
        <div>Determines how high the atmosphere goes in the scene, affecting density distribution.</div><div style="color: rgba(0,0,0,.5)">Mostly affects vertical transitions in the atmosphere, where lower scale heights will make effects of changing altitude appear quicker.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Intensity
<div class="parameter">
    <div class="parameter__info">
        <div>Artistical control that affects how bright the atmosphere appears.</div><div style="color: rgba(0,0,0,.5)">Atmosphere intensity multiplier.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Night Intensity
<div class="parameter">
    <div class="parameter__info">
        <div>Artistical control that affects how bright the atmosphere appears at night.</div><div style="color: rgba(0,0,0,.5)">Atmosphere intensity multiplier.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Color
<div class="parameter">
    <div class="parameter__info">
        <div>Artistical control that gives a tint to the atmosphere particle.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Inscattering
<div class="parameter">
    <div class="parameter__info">
        <div>Control how much light is scattered through the particle for each wavelength (RGB).</div><div style="color: rgba(0,0,0,.5)">Atmosphere scattering coefficients.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>


### Anisotropy
<div class="parameter">
    <div class="parameter__info">
        <div>How concentrated is the light scattering around the sun.</div>
    </div>
    <div class="parameter__video">
        <video autoplay loop >
            <source src="../img/horizontal_256x128.mp4" type="video/mp4">
        </video>
    </div>
</div>









