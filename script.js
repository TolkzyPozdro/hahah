const menuItems = {
  miesa: [
    { name: "Shoarma drobiowa", desc: "Mięso z kurczaka, frytki lub ryż, zestaw surówek, sos", price: "27 zł", tag: "Popularne" },
    { name: "Sakkara Extra", desc: "Duża porcja grillowanych mięs i dodatków dla dwóch osób", price: "72 zł", tag: "Dla dwóch osób" },
    { name: "Szaszłyk drobiowy", desc: "Grillowany kurczak, ziemniaczki, surówki i sos", price: "34 zł", tag: "Popularne" },
    { name: "Kebap orientalny", desc: "Mięso, warzywa, przyprawy i sos w stylu Sakkary", price: "31 zł", tag: "Ostre" },
    { name: "Danie wołowe", desc: "Wołowina z dodatkami, podawana z ryżem albo frytkami", price: "39 zł", tag: "" }
  ],
  pizza: [
    { name: "Pizza Sakkara", desc: "Sos, ser, mięso, papryka, cebula i orientalne przyprawy", price: "36 zł", tag: "Popularne" },
    { name: "Capricciosa 32 cm", desc: "Sos, ser, szynka, pieczarki", price: "32 zł", tag: "" },
    { name: "Pizza Espana", desc: "Sos, ser, salami, papryka, oliwki", price: "36 zł", tag: "" },
    { name: "Pizza Vege", desc: "Sos, ser, warzywa, pieczarki, oliwki", price: "34 zł", tag: "Nowość" }
  ],
  dzieci: [
    { name: "Mini shoarma", desc: "Mniejsza porcja kurczaka z frytkami i surówką", price: "21 zł", tag: "" },
    { name: "Nuggetsy z frytkami", desc: "Chrupiące kawałki kurczaka z łagodnym sosem", price: "20 zł", tag: "" },
    { name: "Mała pizza", desc: "Prosty smak dla dzieci: sos, ser, szynka", price: "23 zł", tag: "" }
  ],
  salatki: [
    { name: "Sałatka Sakkara", desc: "Warzywa, grillowany kurczak, sos i chrupiące dodatki", price: "29 zł", tag: "Popularne" },
    { name: "Sałatka grecka", desc: "Warzywa, feta, oliwki, oliwa i zioła", price: "25 zł", tag: "" },
    { name: "Sałatka z wołowiną", desc: "Ciepłe mięso, świeże warzywa i sos orientalny", price: "32 zł", tag: "Nowość" }
  ],
  zupy: [
    { name: "Zupa orientalna", desc: "Rozgrzewająca zupa z przyprawami i warzywami", price: "17 zł", tag: "Ostre" },
    { name: "Rosół domowy", desc: "Klasyczna zupa dla całej rodziny", price: "14 zł", tag: "" },
    { name: "Krem pomidorowy", desc: "Gęsta zupa z pomidorów i ziół", price: "15 zł", tag: "" }
  ],
  dodatki: [
    { name: "Frytki", desc: "Chrupiące, podawane z sosem", price: "12 zł", tag: "" },
    { name: "Ryż orientalny", desc: "Delikatnie przyprawiony dodatek do mięs", price: "10 zł", tag: "" },
    { name: "Zestaw surówek", desc: "Świeże warzywa do dań głównych", price: "11 zł", tag: "" },
    { name: "Sos czosnkowy lub ostry", desc: "Dodatek do dań i pizzy", price: "4 zł", tag: "Ostre" }
  ],
  napoje: [
    { name: "Lemoniada", desc: "Cytrusowa, chłodna, dobra do dań z grilla", price: "12 zł", tag: "" },
    { name: "Napój 0,5 l", desc: "Popularne napoje gazowane i woda", price: "8 zł", tag: "" },
    { name: "Herbata orientalna", desc: "Ciepła herbata do deseru lub obiadu", price: "9 zł", tag: "" }
  ]
};

const menuList = document.querySelector("#menuList");
const tabs = [...document.querySelectorAll(".tab")];

function renderMenu(category) {
  menuList.innerHTML = menuItems[category]
    .map((item) => {
      const tag = item.tag ? `<span class="tag">${item.tag}</span>` : "";
      return `
        <article class="menu-row">
          <div>
            <h3>${item.name}${tag}</h3>
            <p>${item.desc}</p>
          </div>
          <strong class="price">${item.price}</strong>
        </article>
      `;
    })
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

renderMenu("miesa");

document.querySelector(".booking").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name") || "Gość";
  const people = form.get("people") || "2";
  const time = form.get("time") || "wybrany termin";
  const note = document.querySelector("#formNote");
  note.textContent = `Gotowe: ${name}, ${people} os., ${time}. Najszybciej potwierdzić rezerwację telefonicznie: 44 649 31 19.`;
});
