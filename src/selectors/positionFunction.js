// https://www.youtube.com/watch?v=SqIYjH2ZhAc&ab_channel=CodeID

const cercles = document.querySelectorAll('.cercles');

const positionCercle = (element, theta) => {
  element.style.left = `${50 + (50 * Math.cos(theta))}%`;
  element.style.top = `${50 + (50 * Math.sin(theta))}%`;
};

for (let i = 0; i < cercles.length; i++) {
  const angle = ((Math.PI * 2) / cercles.length) * i;
  positionCercle(cercles[i], angle);
}
