

!!! tip ""
    Hey :wave:, first time here? You can find the installation guide and first run in the [getting started](/psa/getting-started/) section.


Take a deep breath and have a look at the user interface. At a glance, it may look a bit complex. It is due to many tweakable parameters and fancy names like *Kelvins*, *radiance*, and *absorption* that we use to standardize variable names.


* [Sun](#sun)
* [Binary Sun](#binary-sun)
* [Atmosphere](#atmosphere)
* [Stars](#stars)
* [Clouds](#clouds)
* [Object fog](#object-fog)
* [Ground](#ground)
* [Artistic Controls](#artistic-controls)


## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M9.492 2.996A.5.5 0 0 0 9 3.504v2.654a3.98 3.98 0 0 0-1.955 1.184L4.854 5.15a.5.5 0 1 0-.707.707l2.32 2.32A3.941 3.941 0 0 0 6 10.004H3.5c-.667 0-.667 1 0 1h2.64a3.98 3.98 0 0 0 1.192 1.96L5.146 15.15c-.471.472.236 1.18.708.708l2.316-2.317c.55.286 1.162.463 1.822.463H10v2.5c0 .667 1 .667 1 0v-2.646a3.982 3.982 0 0 0 1.953-1.194l2.194 2.194c.471.505 1.214-.237.707-.708l-2.325-2.324a3.934 3.934 0 0 0 .458-1.814v-.008H16.5c.667 0 .667-1 0-1h-2.66a3.983 3.983 0 0 0-1.186-1.947l2.2-2.2a.5.5 0 1 0-.708-.707l-2.33 2.33A3.942 3.942 0 0 0 10 6.018V3.504a.5.5 0 0 0-.508-.508zm.5 4.022a2.987 2.987 0 0 1 2.994 2.994 2.986 2.986 0 0 1-2.994 2.992A2.984 2.984 0 0 1 7 10.012a2.986 2.986 0 0 1 2.992-2.994z"/></svg></span> Sun

### Rotation
<div class="parameter">
    <div class="parameter__info">
        <span>Horizontal and vertical movement of the sun.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Allow to position sun in specific position creating feeling that it is a morning, midday or an evening.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/rotation.mp4" type="video/mp4"></video></div>
</div>


### Sun disk
<div class="parameter">
    <div class="parameter__info">
        <span>Choose to see a physical sun disk in the sky.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Disk can be removed in a specific edge cases when sun disk in renders appears too bright.</span>
    </div>
    <div class="parameter__video"><img src="../img/documentation/sun-disk.jpg" alt="" /></div>
</div>


### Sun lamp
<div class="parameter">
    <div class="parameter__info">
        <span>Choose to use a sun lamp or sun disk in the world for illumination.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Enabling this will ensure that there are sun shadows present in Eevee, as well as potentially help Cycles render quicker by requiring slightly fewer samples. Disabling this will mostly benefit Cycles renders, where the result will be more accurate with better matching reflections.</span>
    </div>
    <div class="parameter__video"><img src="../img/documentation/sun-lamp.jpg" alt="" /></div>
</div>


### Angular diameter
<div class="parameter">
    <div class="parameter__info">
        <span>The size of the sun disk.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Affects shadow and lighting softness and the visual appearance of the sun disk. </span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/angular_diameter.mp4" type="video/mp4"></video></div>
</div>


### Temperature K
<div class="parameter">
    <div class="parameter__info">
        <span>Physical temperature (in Kelvins) of the sun changes the color of the sun disk.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The bigger the value, the bluer the sun.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/temperaturek.mp4" type="video/mp4"></video></div>
</div>
<div class="parameter mb-64"><img src="../img/documentation/temperature_kelvins.png" alt="" /></div>

### Intensity
<div class="parameter">
    <div class="parameter__info">
        <span>Intensity of the binary sun emission.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Higher intensity makes the sun brighter, thus illuminating the scene more.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/intensity_256x128.mp4" type="video/mp4"></video></div>
</div>


### Binary sun
<div class="parameter">
    <div class="parameter__info">
        <span>Enables a second sun that is bound to the main sun.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">In a binary star system, there are two stars that orbit around a common center of mass.</span>
    </div>
    <div class="parameter__video"><img src="../img/documentation/binary-sun.jpg" alt="" /></div>
</div>




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M9.492 2.996A.5.5 0 0 0 9 3.504v2.654a3.98 3.98 0 0 0-1.955 1.184L4.854 5.15a.5.5 0 1 0-.707.707l2.32 2.32A3.941 3.941 0 0 0 6 10.004H3.5c-.667 0-.667 1 0 1h2.64a3.98 3.98 0 0 0 1.192 1.96L5.146 15.15c-.471.472.236 1.18.708.708l2.316-2.317c.55.286 1.162.463 1.822.463H10v2.5c0 .667 1 .667 1 0v-2.646a3.982 3.982 0 0 0 1.953-1.194l2.194 2.194c.471.505 1.214-.237.707-.708l-2.325-2.324a3.934 3.934 0 0 0 .458-1.814v-.008H16.5c.667 0 .667-1 0-1h-2.66a3.983 3.983 0 0 0-1.186-1.947l2.2-2.2a.5.5 0 1 0-.708-.707l-2.33 2.33A3.942 3.942 0 0 0 10 6.018V3.504a.5.5 0 0 0-.508-.508zm.5 4.022a2.987 2.987 0 0 1 2.994 2.994 2.986 2.986 0 0 1-2.994 2.992A2.984 2.984 0 0 1 7 10.012a2.986 2.986 0 0 1 2.992-2.994z"/></svg></span> Binary Sun

### Distance
<div class="parameter">
    <div class="parameter__info">
        <span>Distance from the main sun.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">More accurately the distance between the primary and binary sun.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/bi_sun_distance.mov" type="video/mp4"></video></div>
</div>


### Phase
<div class="parameter">
    <div class="parameter__info">
        <span>The angle at which the binary sun is placed relative to the main sun.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The phase angle is the angle formed between the two suns relative to the observer.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/bi_sun_phase.mov" type="video/mp4"></video></div>
</div>


### Angular diameter
<div class="parameter">
    <div class="parameter__info">
        <span>The size of the binary sun disc.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The angular diameter is the angle formed between two imaginary lines that extend from the observer's eye to opposite edges of the binary sun disc. Larger the angular diameter, less bright the sun disc will appear, and softer the shadows will form.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/bi_sun_angular_diameter.mov" type="video/mp4"></video></div>
</div>


### Temperature K
<div class="parameter">
    <div class="parameter__info">
        <span>Physical temperature (in Kelvins) of the binary sun changes the color of the binary sun disk.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The bigger the value, the bluer the sun.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/bi_sun_temperaturek.mov" type="video/mp4"></video></div>
</div>


### Intensity
<div class="parameter">
    <div class="parameter__info">
        <span>Intensity of the binary sun emission.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Changes the binary sun radiance intensity in Watt·sr/m2.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/bi_sun_intensity.mov" type="video/mp4"></video></div>
</div>




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M16.492 2.994a.5.5 0 0 0-.344.15l-1.57 1.57a6.962 6.962 0 0 0-4.576-1.716c-3.86 0-7 3.14-7 7 0 1.75.65 3.35 1.715 4.578l-1.569 1.569a.5.5 0 1 0 .707.707l1.569-1.569a6.966 6.966 0 0 0 4.578 1.715c3.86 0 7-3.14 7-7 0-1.75-.651-3.347-1.717-4.576l1.57-1.57a.5.5 0 0 0-.363-.858zm-6.49 1.004c3.32 0 6 2.68 6 6s-2.68 6-6 6a5.992 5.992 0 0 1-5.467-8.467l.467.467 1 1v2h2v1l1 1v2h2l1-1 1-1v-1l-1-1h-3l-1-1h-1l1-1h1l2-2-1-1h-1l-1-1 .894-.894a6.043 6.043 0 0 1 1.106-.106z"/></svg></span> Atmosphere

### Density
<div class="parameter">
    <div class="parameter__info">
        <span>Control how much atmosphere is present on the planet.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">For example, 0 is the vacuum of the space, but 1.22 kg/m3 is the atmosphere density for the Earth.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/density.mp4" type="video/mp4"></video></div>
</div>


### Scale Height
<div class="parameter">
    <div class="parameter__info">
        <span>Determines how high the atmosphere goes in the scene, affecting density distribution.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Mostly affects vertical transitions in the atmosphere, where lower scale heights will make effects of changing altitude appear quicker.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/scale_height.mp4" type="video/mp4"></video></div>
</div>


### Intensity
<div class="parameter">
    <div class="parameter__info">
        <span>Artistical control that affects how bright the atmosphere appears.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Atmosphere intensity multiplier.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/atmosphere_intensity.mp4" type="video/mp4"></video></div>
</div>


### Night Intensity
<div class="parameter">
    <div class="parameter__info">
        <span>Artistical control that affects how bright the atmosphere appears at night.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Atmosphere intensity multiplier.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/night_intensity.mp4" type="video/mp4"></video></div>
</div>


### Color
<div class="parameter">
    <div class="parameter__info">
        <span>Artistical control that gives a tint to the atmosphere particle.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The tint or hue of the atmospheric particles, that are added to the scene, simulate the appearance of a realistic sky. This can include the color of the sky during different times of the day, such as blue during the day, orange and red during sunset, and dark blue or black during the night.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/atmosphere_color.mp4" type="video/mp4"></video></div>
</div>


### Inscattering
<div class="parameter">
    <div class="parameter__info">
        <span>Control how much light is scattered through the particle for each wavelength (RGB).</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Atmosphere scattering coefficients.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/inscattering.mp4" type="video/mp4"></video></div>
</div>


### Absorption
<div class="parameter">
    <div class="parameter__info">
        <span>In real life situation, this should be an invert of inscattering value to give a physically accurate appearance.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This control is exposed to give more artistic freedom.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/absorption.mp4" type="video/mp4"></video></div>
</div>


### Mie Scattering Intensity
<div class="parameter">
    <div class="parameter__info">
        <span>Aura around the sun.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Light scattering around the sun in the lower atmospheric layer.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/mie_intensity.mp4" type="video/mp4"></video></div>
</div>


### Mie Scattering Anisotropy
<div class="parameter">
    <div class="parameter__info">
        <span>How concentrated is the light scattering around the sun.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">It refers to the concentration of scattered light around the sun as viewed from a particular point in space. Mie scattering is a type of scattering that occurs when light interacts with particles that are of a larger size than the wavelength of the light.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/atmosphere_mie_scattering_anisotropy.mov" type="video/mp4"></video></div>
</div>




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M7.5 3.5A.5.5 0 0 0 7 4v3a.5.5 0 0 0 .5.5h3A.5.5 0 0 0 11 7V4a.5.5 0 0 0-.5-.5zm.5 1h2v2H8zm4.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm.5 1h2v2h-2zm-8.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3A.5.5 0 0 0 8 16v-3a.5.5 0 0 0-.5-.5zm.5 1h2v2H5z"/></svg></span> Stars

### Type
<div class="parameter">
    <div class="parameter__info">
        <span>Use procedurally generated stars or image texture for the stars.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Procedurally stars are generated using noise texture. When using image texture it is applied using equirectangular projection.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Radiance Intensity
<div class="parameter">
    <div class="parameter__info">
        <span>Artistic control that affects how bright the stars are.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Radiance intensity refers to the brightness of stars and can be adjusted for artistic effect or to simulate the actual brightness of stars in the night sky, allowing for the creation of different moods or atmospheres in a star field scene.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/stars_rintensity.mp4" type="video/mp4"></video></div>
</div>


### Radiance Gamma
<div class="parameter">
    <div class="parameter__info">
        <span>How dense stars appear in the sky.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Changes star brightness distribution curve.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/stars_gamma.mp4" type="video/mp4"></video></div>
</div>


### Amount
<div class="parameter">
    <div class="parameter__info">
        <span>Magnitude of stars in the night sky.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Magnitude measures celestial object brightness, affected by luminosity, distance from Earth, and atmospheric absorption. Adjusting star objects brightness in PSA can simulate the night sky and represent relative brightness. How big of a % of the scene is filled with stars.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/stars_amount.mov" type="video/mp4"></video></div>
</div>


### Scale
<div class="parameter">
    <div class="parameter__info">
        <span>Global scale of the star texture.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The bigger the scale the smaller the stars and more clustered together they appear. If the stars are too large or too sparse, or if they are too small or too dense, the scene may look unrealistic or cluttered.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Seed
<div class="parameter">
    <div class="parameter__info">
        <span>Randomly redistributed star texture for different star configurations/placement.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Different seed values can generate a new star texture with unique configurations and placements, where the seed value determines the starting point of randomization. In PSA, this technique allows for creating diverse star configurations and placements with the same texture and settings.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/stars_seed.mov" type="video/mp4"></video></div>
</div>


### Temperature
<div class="parameter">
    <div class="parameter__info">
        <span>How hot or bright the stars appear.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Black body temperature is measured in kelvins. A "black body" absorbs all electromagnetic radiation, appearing black. They aid in understanding radiation and are used to measure temperature and energy standards in physics</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/stars_temperature.mov" type="video/mp4"></video></div>
</div>




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M10.69 3.012A4.003 4.003 0 0 0 7 7a.5.5 0 0 0 .016.133 3.973 3.973 0 0 0-1.059.427 3.994 3.994 0 0 0-1.879 4.145A2.998 2.998 0 0 0 3.002 14.1a3.005 3.005 0 0 0 2.672 2.881 3 3 0 0 0 3.152-2.008 3.97 3.97 0 0 0 2.499-.746 3.498 3.498 0 0 0 3.789.377 3.5 3.5 0 0 0-.322-6.357 3.998 3.998 0 0 0-.885-3.996 4.024 4.024 0 0 0-3.217-1.24zm.521.996a2.996 2.996 0 0 1 2.51 4.256.5.5 0 0 0-.053.216.5.5 0 0 0 .387.582 2.498 2.498 0 0 1 .598 4.656 2.499 2.499 0 0 1-2.84-.372.5.5 0 0 0-.203-.12.5.5 0 0 0-.282-.097.5.5 0 0 0-.351.129 3 3 0 0 1-2.399.713.5.5 0 0 0-.543.33.5.5 0 0 0-.097.197 1.994 1.994 0 0 1-2.154 1.49 1.993 1.993 0 0 1-.957-3.598.5.5 0 0 0 .166-.117c.198-.115.418-.2.656-.242a.5.5 0 0 0-.09-.994.5.5 0 0 0-.084.01c-.16.028-.313.075-.463.127a2.992 2.992 0 0 1 5.057-2.346.5.5 0 0 0 .69-.724 3.995 3.995 0 0 0-2.31-1.079C8.302 7.008 8.15 7.01 8 7.01A.5.5 0 0 0 8 7a2.996 2.996 0 0 1 3.211-2.992z"/></svg></span> Clouds

### Type
<div class="parameter">
    <div class="parameter__info">
        <span>Use procedurally generated clouds or image texture for the clouds.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Clouds with PSA can be created using either procedurally generated algorithms or image texture-based methods. Procedural clouds offer greater control over the appearance and are quick to render, while image texture-based clouds can achieve a specific look or style but are limited by the chosen image or texture.</span>
    </div>
    <div class="parameter__video"></div>
</div>


### Seed
<div class="parameter">
    <div class="parameter__info">
        <span>Randomly generated codes for different cloud configurations/placement.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Procedural cloud generation uses algorithms that determine the cloud's shape, size, and density, but the same set of parameters will always produce the same cloud formation due to determinism. Use seed to create different variations.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/cloud_seed.mov" type="video/mp4"></video></div>
</div>


### Scale
<div class="parameter">
    <div class="parameter__info">
        <span>Changes scale of the cloud noise texture.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Changes the scale of the cloud texture</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/cloud_scale.mp4" type="video/mp4"></video></div>
</div>


### Thickness
<div class="parameter">
    <div class="parameter__info">
        <span>Control how opaque clouds appear overall.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Adjusting the thickness parameter can affect the appearance of clouds, making them more or less opaque by controlling how much light passes through. Thicker clouds block more light, appearing more opaque, while thinner clouds appear more transparent.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/clouds_thickness.mp4" type="video/mp4"></video></div>
</div>


### Detail
<div class="parameter">
    <div class="parameter__info">
        <span>How detailed the clouds appear.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The detail parameter adjusts the complexity of cloud texture, allowing the creation of clouds with varying levels of intricacy using noise textures. It controls the size of shapes and contrast between them.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/clouds_detail.mov" type="video/mp4"></video></div>
</div>


### Dimension
<div class="parameter">
    <div class="parameter__info">
        <span>How dimensional the clouds appear to be (flat to rough).</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Adjust the amount of the detail level of the main texture. Smaller the dimension the more detailed the clouds will appear.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/clouds_dimension.mov" type="video/mp4"></video></div>
</div>


### Lacunarity
<div class="parameter">
    <div class="parameter__info">
        <span>The degree of spatial variability or patchiness of the cloud cover.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Adjust the scales of the detail texture. Increasing lacunarity will increase the detail of the smaller clouds</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/clouds_lacunarity.mov" type="video/mp4"></video></div>
</div>


### Coverage
<div class="parameter">
    <div class="parameter__info">
        <span>Control minimum and maximum of how much clouds are covering the sky.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Adjust the coverage parameter to control the minimum and maximum coverage of clouds in the sky, allowing you to create various weather conditions and atmospheric effects, ranging from a completely clear sky to a sky that is completely covered by clouds.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/cloud_coverage.mov" type="video/mp4"></video></div>
</div>


### Lighting Intensity
<div class="parameter">
    <div class="parameter__info">
        <span>Artistic control that allows control over how much sunlight is affecting the clouds.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Control cloud brightness and contrast, along with creating atmospheric effects using the lighting intensity parameter.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/clouds_lighting_intensity.mp4" type="video/mp4"></video></div>
</div>


### Self Shadowing
<div class="parameter">
    <div class="parameter__info">
        <span>Control the amount of shadows forming on clouds.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The self-shadowing parameter simulates light passing through and around the clouds, adding depth and realism to the scene. Directly influences how much the shadows the cloud casts against itself are expressed.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/cloud_self_shadow.mp4" type="video/mp4"></video></div>
</div>


### Directional Power
<div class="parameter">
    <div class="parameter__info">
        <span>How much light is concentrated around the sun.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter adjusts the sun's effect on cloud appearance. A higher directional power focuses more light around the sun, making clouds brighter near it. Lower values distribute light more evenly across the sky for a less bright, diffuse appearance. </span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/cloud_direction.mp4" type="video/mp4"></video></div>
</div>


### Inscattering
<div class="parameter">
    <div class="parameter__info">
        <span>Control how much light is scattered through the particle for each wavelength (RGB).</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Cloud scattering coefficients.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/cloud_inscattering.mp4" type="video/mp4"></video></div>
</div>


### Location
<div class="parameter">
    <div class="parameter__info">
        <span>Cloud coordinate position offset.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">The location parameter moves clouds from their default position to create dynamic formations or achieve a specific visual effect.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/cloud_location.mp4" type="video/mp4"></video></div>
</div>


### Rotation
<div class="parameter">
    <div class="parameter__info">
        <span>Cloud coordinate rotation offset.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Rotation parameter rotates clouds around their center or pivot point. It's useful for creating dynamic cloud formations or visual effects.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/cloud_rotation.mp4" type="video/mp4"></video></div>
</div>




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M10 3c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1a5.991 5.991 0 0 1 5.998 5.959C14.887 10.903 12.995 12 10 12v4c-3.32 0-6-2.68-6-6l.002-.043C5.113 10.901 7.003 12 10 12z"/></svg></span> Object Fog

### Type
<div class="parameter">
    <div class="parameter__info">
        <span>Chose manually or automatically to apply fog material node for every material in the scene.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Manual allows to chose when fog material node is applied for materials. Auto applies fog material node whenever new material is added to an object.</span>
    </div>
    <div class="parameter__video"><img src="../img/documentation/manual-auto.jpg" alt="" /></div>
</div>


### Apply / Clear
<div class="parameter">
    <div class="parameter__info">
        <span>Adds or removes fog material from every material in the scene.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">If user has manually disconnected fog node for material or relinked it in a different way we apply custom property `psa_user_modified` to object. This prevents our script from overriding user changes.</span>
    </div>
    <div class="parameter__video"><img src="../img/documentation/safter_fog.png" alt="" /></div>
</div>




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><path d="M5.75 3.5a.5.5 0 0 0-.482.37l-3.25 12a.5.5 0 0 0 .482.63h15a.5.5 0 0 0 .482-.63l-3.25-12a.5.5 0 0 0-.482-.37zm.383 1h2.086l-.217 2H5.59zm3.094 0h1.546l.217 2H9.01zm2.554 0h2.086l.541 2h-2.41zm-6.46 3h2.572l-.327 3H4.508zm3.58 0H11.1l.326 3H8.574zm3.206 0h2.573l.812 3h-3.058zm-7.87 4h3.22l-.434 4h-3.87zm4.23 0h3.066l.436 4H8.03zm4.076 0h3.22l1.085 4h-3.871z" /></svg></span> Ground

### Color
<div class="parameter">
    <div class="parameter__info">
        <span>Control the base color of the ground plane.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Ground color/texture parameter controls the hue, saturation, and brightness of the ground plane, affecting the overall mood, lighting, and environment of the scene.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/ground_color.mp4" type="video/mp4"></video></div>
</div>


### Ground
<div class="parameter">
    <div class="parameter__info">
        <span>If enabled, creates an infinite ground plane. Makes the horizon visible.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Enabling this option creates a continuous ground plane, useful for outdoor scenes, landscapes, and visible horizon.</span>
    </div>
    <div class="parameter__video"><img src="" alt="" /></div>
</div>


### Ground offset
<div class="parameter">
    <div class="parameter__info">
        <span>Move the ground plane vertically by offset.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Useful for low orbit and aerial shots.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/ground_offset.mp4" type="video/mp4"></video></div>
</div>


### Horizon offset
<div class="parameter">
    <div class="parameter__info">
        <span>Move only horizon line up or down.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Adjusting the horizon offset can change the horizon line position, affecting the scene's appearance. It creates the illusion of a higher or lower viewpoint, emphasizing specific elements and producing atmospheric effects.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/ground_horizon_offset.mov" type="video/mp4"></video></div>
</div>




## <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xml:space="preserve"><g><path d="M10.488 8.004a.5.5 0 0 0-.346.146L8.996 9.297l1.707 1.707 1.147-1.146a.5.5 0 0 0 0-.708l-1-1a.5.5 0 0 0-.362-.146zm-2.199 2L3.142 15.15a.5.5 0 0 0 0 .708l1 1a.5.5 0 0 0 .708 0l5.146-5.147zM6.488 2.996a.5.5 0 0 0-.492.508v1.5h-1.5a.5.5 0 1 0 0 1h1.5v1.5a.5.5 0 1 0 1 0v-1.5h1.5a.5.5 0 1 0 0-1h-1.5v-1.5a.5.5 0 0 0-.508-.508zm8 .5a.5.5 0 0 0-.492.508v1h-1a.5.5 0 1 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.508-.508zm0 7.5a.5.5 0 0 0-.492.508v1.5h-1.5a.5.5 0 1 0 0 1h1.5v1.5a.5.5 0 1 0 1 0v-1.5h1.5a.5.5 0 1 0 0-1h-1.5v-1.5a.5.5 0 0 0-.508-.508z"/></g></svg></span> Artistic Controls

### Distance scalar
<div class="parameter">
    <div class="parameter__info">
        <span>Control all distance values globally.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">This parameter adjusts the distance between objects in a scene, and is useful for large scenes. Decreasing it creates more distance and a spacious feel, while increasing it creates less distance and a crowded feel.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/distance_scalar.mp4" type="video/mp4"></video></div>
</div>


### Falloff
<div class="parameter">
    <div class="parameter__info">
        <span>Control how fast the atmospheric mist changes density.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Atmospheric fog distance falloff curve.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/falloff.mp4" type="video/mp4"></video></div>
</div>


### Sun radiance gamma
<div class="parameter">
    <div class="parameter__info">
        <span>Control how intense Sun color appears.</span><span style="margin-left: 4px; color: rgba(0,0,0,.5)">Sun color gamma curve.</span>
    </div>
    <div class="parameter__video"><video autoplay loop muted playsinline ><source src="../img/documentation/sun_radiance_gamma.mp4" type="video/mp4"></video></div>
</div>











