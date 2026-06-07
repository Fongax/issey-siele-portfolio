const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');

if (toggle && header) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
}

const portfolio = document.querySelector('.portfolio-selector');
if (portfolio) {
  const preview = portfolio.querySelector('.portfolio-selector__preview');
  const defaultBg = portfolio.dataset.defaultBg || 'assets/portfolio-bg.jpg';
  preview.style.setProperty('--portfolio-bg', `url("${defaultBg}")`);

  document.querySelectorAll('.project-link[data-preview]').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      preview.style.setProperty('--portfolio-bg', `url("${link.dataset.preview}")`);
      portfolio.classList.add('preview-active');
    });

    link.addEventListener('focus', () => {
      preview.style.setProperty('--portfolio-bg', `url("${link.dataset.preview}")`);
      portfolio.classList.add('preview-active');
    });

    link.addEventListener('mouseleave', () => {
      preview.style.setProperty('--portfolio-bg', `url("${defaultBg}")`);
      portfolio.classList.remove('preview-active');
    });

    link.addEventListener('blur', () => {
      preview.style.setProperty('--portfolio-bg', `url("${defaultBg}")`);
      portfolio.classList.remove('preview-active');
    });
  });
}
