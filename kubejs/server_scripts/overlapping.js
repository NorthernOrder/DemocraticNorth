const vanillaPlanks = [
  "oak",
  "spruce",
  "birch",
  "jungle",
  "acacia",
  "dark_oak",
  "mangrove",
  "crimson",
  "warped",
];

ServerEvents.recipes((event) => {
  vanillaPlanks.forEach((plank) => {
    const support = `decorative_blocks:${plank}_support`;

    event.remove({ output: support });

    event.recipes.minecraft.crafting_shaped(`3x ${support}`, ["PP", "S "], {
      P: `minecraft:${plank}_planks`,
      S: "minecraft:stick",
    });
  });
});
