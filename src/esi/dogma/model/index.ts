export * from "./DogmaAttribute";
export * from "./DogmaEffect";
//TODO 少校准值的
export const Units: Record<string, any> = {
  "1": {
    displayName: "m",
    description: "Meter",
    name: "Length",
  },
  "2": {
    displayName: "kg",
    description: "Kilogram",
    name: "Mass",
  },
  "3": {
    displayName: "sec",
    description: "Second",
    name: "Time",
  },
  "4": {
    displayName: "A",
    description: "Ampere",
    name: "Electric Current",
  },
  "5": {
    displayName: "K",
    description: "Kelvin",
    name: "Temperature",
  },
  "6": {
    displayName: "mol",
    description: "Mole",
    name: "Amount Of Substance",
  },
  "7": {
    displayName: "cd",
    description: "Candela",
    name: "Luminous Intensity",
  },
  "8": {
    displayName: "m2",
    description: "Square meter",
    name: "Area",
  },
  "9": {
    displayName: "m3",
    description: "Cubic meter",
    name: "Volume",
  },
  "10": {
    displayName: "m/sec",
    description: "Meter per second",
    name: "Speed",
  },
  "11": {
    displayName: "m/sec",
    description: "Meter per second squared",
    name: "Acceleration",
  },
  "12": {
    displayName: "m-1",
    description: "Reciprocal meter",
    name: "Wave Number",
  },
  "13": {
    displayName: "kg/m3",
    description: "Kilogram per cubic meter",
    name: "Mass Density",
  },
  "14": {
    displayName: "m3/kg",
    description: "Cubic meter per kilogram",
    name: "Specific Volume",
  },
  "15": {
    displayName: "A/m2",
    description: "Ampere per square meter",
    name: "Current Density",
  },
  "16": {
    displayName: "A/m",
    description: "Ampere per meter",
    name: "Magnetic Field Strength",
  },
  "17": {
    displayName: "mol/m3",
    description: "Mole per cubic meter",
    name: "Amount-Of-Substance Concentration",
  },
  "18": {
    displayName: "cd/m2",
    description: "Candela per square meter",
    name: "Luminance",
  },
  "19": {
    displayName: "kg/kg = 1",
    description:
      "Kilogram per kilogram, which may be represented by the number 1",
    name: "Mass Fraction",
  },
  "101": {
    displayName: "s",
    name: "Milliseconds",
  },
  "102": {
    displayName: "mm",
    name: "Millimeters",
  },
  "103": {
    name: "MegaPascals",
  },
  "104": {
    displayName: "x",
    description: "Indicates that the unit is a multiplier.",
    name: "Multiplier",
  },
  "105": {
    displayName: "%",
    name: "Percentage",
  },
  "106": {
    displayName: "tf",
    name: "Teraflops",
  },
  "107": {
    displayName: "MW",
    name: "MegaWatts",
  },
  "108": {
    displayName: "%",
    description: "Used for resistance.\r\n0.0 = 100% 1.0 = 0%",
    name: "Inverse Absolute Percent",
  },
  "109": {
    displayName: "%",
    description: "Used for multipliers displayed as %1.1 = +10%0.9 = -10%",
    name: "Modifier Percent",
  },
  "111": {
    displayName: "%",
    description:
      "Used to modify damage resistance. Damage resistance bonus.\r\n0.1 = 90%\r\n0.9 = 10%",
    name: "Inversed Modifier Percent",
  },
  "112": {
    displayName: "rad/sec",
    description: "Rotation speed.",
    name: "Radians/Second",
  },
  "113": {
    displayName: "HP",
    name: "Hitpoints",
  },
  "114": {
    displayName: "GJ",
    description: "Giga Joule",
    name: "capacitor units",
  },
  "115": {
    displayName: "groupID",
    name: "groupID",
  },
  "116": {
    displayName: "typeID",
    name: "typeID",
  },
  "117": {
    displayName: "1=small 2=medium 3=l",
    description: "1=small 2=medium 3=large 4=x-large",
    name: "Sizeclass",
  },
  "118": {
    displayName: "Ore units",
    name: "Ore units",
  },
  "119": {
    displayName: "attributeID",
    name: "attributeID",
  },
  "120": {
    displayName: "points",
    name: "attributePoints",
  },
  "121": {
    displayName: "%",
    description: "Used for real percentages, i.e. the number 5 is 5%",
    name: "realPercent",
  },
  "122": {
    name: "Fitting slots",
  },
  "123": {
    displayName: "sec",
    description: "Shows seconds directly",
    name: "trueTime",
  },
  "124": {
    displayName: "%",
    description: "Used for relative percentages displayed as %",
    name: "Modifier Relative Percent",
  },
  "125": {
    displayName: "N",
    name: "Newton",
  },
  "126": {
    displayName: "ly",
    name: "Light Year",
  },
  "127": {
    displayName: "%",
    description: "0.0 = 0% 1.0 = 100%",
    name: "Absolute Percent",
  },
  "128": {
    displayName: "Mbit/sec",
    description: "Mega bits per second",
    name: "Drone bandwidth",
  },
  "129": {
    description: "Hours",
    name: "Hours",
  },
  "133": {
    displayName: "ISK",
    description: "ISK",
    name: "Money",
  },
  "134": {
    displayName: "m3/hour",
    description: "Bandwidth for PI",
    name: "Logistical Capacity",
  },
  "135": {
    displayName: "AU",
    description:
      "Used to denote distance, 1AU = The distance from the Earth to the Sun.",
    name: "Astronomical Unit",
  },
  "136": {
    displayName: "Slot",
    description: "Slot number prefix for various purposes",
    name: "Slot",
  },
  "137": {
    displayName: "1=True 0=False",
    description: "For displaying boolean flags 1=True 0=False",
    name: "Boolean",
  },
  "138": {
    displayName: "units",
    description: "Units of something, for example fuel",
    name: "Units",
  },
  "139": {
    displayName: "+",
    description: "Forces a plus sign for positive values",
    name: "Bonus",
  },
  "140": {
    displayName: "Level",
    description: "For anything which is divided by levels",
    name: "Level",
  },
  "141": {
    displayName: "hardpoints",
    description:
      "For various counts to do with turret, launcher and rig hardpoints",
    name: "Hardpoints",
  },
  "142": {
    displayName: "1=Male 2=Unisex 3=Female",
    name: "Sex",
  },
  "143": {
    description: "Date and time",
    name: "Datetime",
  },
  "144": {
    displayName: "AU/s",
    description: "AU per second",
    name: "Warp speed",
  },
  "205": {
    displayName: "%",
    description:
      "Used for multipliers displayed as % 10 is +10% -10 is -10% 3.6 is +3.6%",
    name: "modifier realPercent",
  },
};
