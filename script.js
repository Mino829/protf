// カスタムカーソル
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// 年の自動更新
document.getElementById('year').textContent = new Date().getFullYear();

// GSAP（CDNで読み込むなら以下追加）
// GSAP ScrollTrigger アニメーション
const loadGSAP = async () => {
  await import('https://cdn.skypack.dev/gsap');
  await import('https://cdn.skypack.dev/gsap/ScrollTrigger');

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('section').forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: 'power2.out'
    });
  });
};
loadGSAP();
