ServerEvents.recipes((event) => {
  event.recipes.minecraft.crafting_shaped(
    "minecraft:diamond_pickaxe",
    ["DDD", " S ", " S "],
    {
      D: "minecraft:diamond",
      S: "minecraft:stick",
    },
  );
});
