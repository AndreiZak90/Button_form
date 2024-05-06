class click {
  constructor() {
    this.btn = document.querySelector(".button");
    this.btn.onclick = (e) => {
      e.preventDefault();
      if (this.checkState()) {
        this.closeElem();
      } else {
        this.showElem();
      }
    };
  }

  checkState() {
    this.popupper = document.body.querySelector(".popupper");
    if (document.body.contains(this.popupper)) {
      return true;
    } else {
      return false;
    }
  }
  closeElem() {
    this.popupper.remove();
  }
  showElem() {
    const div = document.createElement("div");
    div.classList.add("popupper");
    const box = document.createElement("div");
    box.classList.add("popupper_box");
    div.append(box);
    const popTitle = document.createElement("h3");
    popTitle.classList.add("popupper_title");
    popTitle.innerHTML = "Заголовок";
    const popText = document.createElement("p");
    popText.classList.add("popupper_text");
    popText.innerHTML = "дополнительная информация о чем-то";
    box.append(popTitle);
    box.append(popText);
    this.btn.appendChild(div);
  }
}
new click();
