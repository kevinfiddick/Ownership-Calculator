export default function calculateTotalPercentages(owners) {
  const getOwnerById = (id) => owners.find((owner) => owner.id === id);
  const calculatePercentage = (owner) => {
    if (owner.parentId === "") {
      return Number(owner.percentage);
    } else {
      const parent = getOwnerById(owner.parentId);
      return parent
        ? (Number(owner.percentage) * calculatePercentage(parent)) / 100
        : Number(owner.percentage);
    }
  };
  const totalPercentages = {};
  owners.forEach((owner) => {
    if (owner.type === "person") {
      const effectivePercentage = calculatePercentage(owner);
      if (totalPercentages[owner.name])
        totalPercentages[owner.name] += effectivePercentage;
      else totalPercentages[owner.name] = effectivePercentage;
    }
  });

  return Object.keys(totalPercentages).map((name) => ({
    name,
    totalPercentage: totalPercentages[name],
  }));
}
