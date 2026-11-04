---
template: overrides/article.html
---

# Object Fog: how it works

Object Fog adds the atmosphere's fog to your materials. Objects then fade into the distance with the same colour and density as the sky. To do this, PSA adds a `PSA_StarlightAtmosphereMaterial` node group before the output node of each material.

The Object Fog panel is in the World tab and in the N panel, under Atmosphere.

## Apply to all

Adds the fog node to each material that PSA can change. Push this button again after you add materials, or after you push Clear.

PSA does not change these materials:

- **Linked materials.** See [Linked materials](#linked-materials).
- **Grease Pencil materials.** Fog is a shader effect. Grease Pencil strokes do not use shaders.
- **Materials that you changed.** See [PSA keeps your changes](#psa-keeps-your-changes).

## Clear

Removes the fog node from each material that PSA changed. The material gets its first link to the output node again. Linked materials do not change.

## Apply to new materials

Set this checkbox. Each material that you make or append after that gets fog. Materials that are already in the file do not change. Linked materials do not get fog.

Clear the checkbox. New materials then stay as Blender makes them. If you set the checkbox again, materials that you made while it was clear do not get fog.

## The status line

The box below the buttons shows two lines:

- **Fog on 3/4 materials.** The second number is the number of materials that PSA can change. Linked and Grease Pencil materials are not in this number.
- **1 linked material ignored.** This line shows only if the file has linked materials. The first button selects the objects that use these materials. The second button opens this page.

Materials with no users are not in the numbers. Blender keeps such materials in the file until you open the file again. Thus the line can show a material for a short time after you unlink it.

## PSA keeps your changes

If you disconnect the fog node, delete it, or put a different node between it and the output node, PSA stops changing that material. Apply to all and Apply to new materials do not change it. Clear removes the fog node from the material. After Clear, Apply to all can change the material again.

## Linked materials

A linked material is in a different .blend file. Blender reads it from that file each time you open your file. Blender does not save changes to linked materials in your file. Thus fog on a linked material shows until you open the file again, and then it is gone.

Object Fog ignores linked materials and shows how many it ignored. There are two ways to get fog on them:

1. **Apply fog in the library file.** Open the .blend file that contains the material. Push Apply to all. Save the file. Each file that links the material then gets the fog.
2. **Make the material local.** Select the objects that use the material. In the 3D Viewport header, select Object, Relations, Make Local. Select *Selected Objects, Data and Materials*. Then push Apply to all.

Note: The first option in the Make Local menu is *Selected Objects*. This option keeps the materials linked.

Object Fog also ignores library overrides, because Blender treats them as linked data. The two options above apply to them too.

??? note "Under the hood: the psa_user_modified property"
    Each material that PSA changes gets a custom property `psa_user_modified`.

    - `0`: PSA added the fog node. PSA can change the node links.
    - `1`: the node links are different from the links that PSA made. PSA does not change this material.

    Clear deletes the property and the fog node.
