ServerEvents.recipes((event) => {
  event.remove({ mod: "toms_storage" });

  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.storage_terminal",
    [" P ", "OLD", "BBB"],
    {
      P: "create:precision_mechanism",
      O: "create:content_observer",
      L: "create:display_link",
      D: "create:display_board",
      B: "#minecraft:wooden_buttons",
    },
  );

  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.crafting_terminal",
    ["BCB", "BTB", "SLS"],
    {
      B: "#c:plates/brass",
      C: "create:crafting_blueprint",
      T: "toms_storage:ts.storage_terminal",
      S: "#c:obsidian_plates",
      L: "create:linked_controller",
    },
  );

  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.inventory_connector",
    ["E", "B", "C"],
    {
      E: "create:electron_tube",
      B: "create:brass_casing",
      C: "create:chute",
    },
  );

  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.trim",
    ["SPS", "BTB", "SPS"],
    {
      S: "minecraft:stick",
      P: "#minecraft:planks",
      B: "#c:plates/brass",
      T: "create:andesite_tunnel",
    },
  );

  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.inventory_cable",
    ["CBC"],
    {
      C: "#c:cast_iron_plates",
      B: "#c:plates/brass",
    },
  );

  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.inventory_cable_connector",
    ["create:chute", "toms_storage:ts.inventory_cable"],
  );

  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.inventory_cable_connector_filtered",
    ["create:smart_chute", "toms_storage:ts.inventory_cable"],
  );

  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.open_crate",
    ["PSP", "P P", "PTP"],
    {
      P: "#minecraft:planks",
      S: "minecraft:stick",
      T: "#minecraft:wooden_trapdoors",
    },
  );

  event.recipes.minecraft.crafting_shapeless(
    "toms_storage:ts.inventory_hopper_basic",
    ["minecraft:hopper", "toms_storage:ts.inventory_cable"],
  );

  event.recipes.minecraft.crafting_shapeless("toms_storage:ts.level_emitter", [
    "create:content_observer",
    "toms_storage:ts.inventory_cable",
  ]);

  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.paint_kit",
    ["IS", "NI"],
    {
      I: "minecraft:ink_sac",
      S: "#c:plates/iron",
      N: "minecraft:iron_nugget",
    },
  );

  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.wireless_terminal",
    ["D", "S", "R"],
    {
      D: "create:display_link",
      S: "toms_storage:ts.storage_terminal",
      R: "create:redstone_link",
    },
  );

  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.adv_wireless_terminal",
    ["BNB", "SWS", "BTB"],
    {
      B: "#c:plates/brass",
      N: "#c:netherite_plates",
      S: "#c:obsidian_plates",
      W: "toms_storage:ts.wireless_terminal",
      T: "toms_storage:ts.crafting_terminal",
    },
  );
});
