const footer = document.createElement('footer');
footer.classList.add('footer');

const footerBox = document.createElement('div');
footerBox.classList.add('footer_box');

const boxFooter = document.createElement('div');
boxFooter.classList.add('box_footer');

const logoImg = createImage('footer_img', 'footer_log.svg', '');
const footerTextContainer = createDiv('footer_text_cont');
const h1 = createHeading('footer_h1', 'Подпишитесь на E-mail рассылку');
const p = createParagraph('p____', 'Если хотите быть в курсе последних новостей и новинок кино -  заполните форму ниже и оформите бесплатную E-mail рассылку!');
const form = document.createElement('form');
form.classList.add('footer_form');
const emailInput = createInput('footer_inp', 'email', 'Введите свой E-mail адрес');
const subscribeButton = createButton('footer_btn', 'Подписаться');
const privacyText = createParagraph('footer_p', 'Соглашаюсь на условия политики конфиденциальности');

footerTextContainer.append(h1);
footerTextContainer.append(p);

form.append(emailInput);
form.append(subscribeButton);

boxFooter.append(logoImg);
boxFooter.append(footerTextContainer);
boxFooter.append(form);
boxFooter.append(privacyText);

footerBox.append(boxFooter);
footer.append(footerBox);

document.body.append(footer);

function createImage(className, src, alt) {
  const img = document.createElement('img');
  img.classList.add(className);
  img.src = src;
  img.alt = alt;
  return img;
}

function createDiv(className) {
  const div = document.createElement('div');
  div.classList.add(className);
  return div;
}

function createHeading(className, text) {
  const heading = document.createElement('h1');
  heading.classList.add(className);
  heading.textContent = text;
  return heading;
}

function createParagraph(className, text) {
  const paragraph = document.createElement('p');
  paragraph.classList.add(className);
  paragraph.textContent = text;
  return paragraph;
}

function createInput(className, type, placeholder) {
  const input = document.createElement('input');
  input.classList.add(className);
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

function createButton(className, text) {
  const button = document.createElement('button');
  button.classList.add(className);
  button.textContent = text;
  return button;
}