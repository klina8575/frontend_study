let menu = document.querySelector('.menu__main');
let subMenu = document.querySelectorAll('.list__drop');
let panel = document.querySelector('.header__panel');
let header = document.querySelector('.header');

// 메뉴에 마우스 오버시 하위메뉴 보여줌
menu.addEventListener('mouseover', () => {
    panel.style.display = 'block';
    subMenu.forEach(subMenu => { subMenu.style.display = "block" });
});

// 메뉴 이외의 곳에 마우스 떼면 하위 메뉴 숨김
header.addEventListener('mouseout', () => {
	panel.style.display = 'none';
    subMenu.forEach(subMenu => { subMenu.style.display = "none" });
});

// 하위메뉴에서 마우스 떼면 하위메뉴 숨김
panel.addEventListener('mouseout', () => {
	panel.style.display = 'none';
    subMenu.forEach(subMenu => { subMenu.style.display = "none" });
});