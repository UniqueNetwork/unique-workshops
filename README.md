## 👩‍🎓 Для кого этот гайд

Этот туториал для тех у кого уже есть изображения токенов и он хочет создать большую коллекцию на сотни или тысячи токенов. Если у вас их нет – <TODO: как сгенерировать>

## ⚙️ Скачайте и настройте проект

> 💡 Если вы никогда не работали с git, node и npm прочитайте наш краткий гайд <TODO где>

Мы подготовили проект со всеми скриптами. 

1. Скачайте его с github
```sh
git clone <TODO>
```

2. Установите зависимости

```sh
npm install
```

3. Создайте в корне проекта файл `config.js`, скопируйте в него содержимое `config.example.js`

## 🖼 Подготовьте изображения
Положите свои изображения в папку `./data`. Изображения должны состоять из "prefix", и порядкого номера, который определит номер токена в коллекции. Для этого туториала префиксом токена будет `workoholic_`. Таким образом, `workaholic_1.png` будет первым токеном в коллекции, `workoholic_2.png`  – вторым и т.д.

> ✏️ Укажите префикс своей коллекции в установив свойство `imagePrefix` файле `config.js`  

## 📇 Подготовьте метаданные

Metadata refers to basic information that provides a description of our NFT or collection, such as its name, description, and other relevant details.

### Установите метадату для коллекции 

> ✏️ в `config.js`: заполните поля `collectionName`, `collectionDescription` и `tokenPrefix`.

<TODO какие еще есть свойства о которых надо рассказать. нестинг?>

After creation of collection metadata file we need to create metadata of our NFT's

### Установите метадату для NFT 

The property `attributes` in `config.js` file should describe traits of your NFT collection. Each trait should have:

  * A `name` название свойства токена
  * A `required` field означает, обязательно ли свойство должно присутствовать у токена
  * The `values`: OPTIONAL field. В случае если значением свойств могут быть только предопределенные значения перечислите их в этом поле

**Example**
```js
        attributes: [
            { name: 'eye', required: true, values: ['Normal Eyes', 'Tired Eyes', 'Brused Eyes'] },
            { name: 'hair', required: false, values: ['Normal Hair', 'Hipster Style', 'Messy Hair', 'Overdue for Haircut', 'Bald Patches'] },
            { name: 'nickname', required: true }
        ],
```
> <font size=1> `eye` обязательное перечисляемое свойство. `hair` перечисляемое, но не обязательное. `nickname` обязательное свойство, его можно будет заполнить произвольными значениями* </font>

> ✏️ в `config.js`: заполните поля `collectionName`, `collectionDescription` и `tokenPrefix`.

## 👨‍🎨 Опишите NFTs properties

Для последующей генерации токенов они должны быть закодирован в csv формате. Первым значением в заголовке должен быть `id` – порядковый номер каждого токена. Следом перечислены все существующие свойства коллекции, установленные на шаге <TODO>.

**Example**
```csv
id,eye,hair,nickname
1,Normal Eyes,Hipster Style,Alex
2,Tired Eyes,,the_hero
3,Brused Eyes,Messy Hair,cryptoman
...
```

Самый простой способ создать такую структуру – воспользоваться [Google Sheets](https://docs.google.com/spreadsheets/d/1712bCiuCKYJOXsN9rIGW_QKJbMt312mw-2WQlSpXMzE/edit#gid=1148781766).

Заоплните таблицу перечислив все свойства своей коллекции в header, а на каждой последующей строке перечислите те свойства, которые будут добавленны токену с соответсвующим `id`. Выгрузите заполненные значения нажав `File - Download - Comma Separated Values (.csv)`


<image src="./docs/sheets.png"></image>

> <font size=1> Значения для свойств `eye` и `hair` должны быть из списка созданного на шаге <TODO>. Свойство `hair` может быть пустым, так как значение required было установленно в false. Свойства для `nickname` могут быть заполнены произвольными строками </font>

> ✏️ переименнуйте выгруженный файл в `nfts.csv` и сохраните в папке `./data`


## ⛓ Prepare Substrate Address with Seed

Для создания коллекции и токенов вам понадобится адрес с токенами сети Юник. Для этого гайда мы используем опал, и вы можете бесплатно получить токены сети OPL используя [Telegram faucet bot](https://t.me/unique2faucet_opal_bot).

If you have never worked with Substrate addresses and seeds before, исопльзуйте эти гайды <TODO>

> ✏️ в `config.js`: заполните поле `ownerSeed`. 
> 
> ❗️ Don’t commit your secrets such as ownerSeed, to version control! We added `config.js` under `.gitignore` с этой целью

## Создайте коллекцию и токены

### Step 1: Загрузите изображения на IPFS

<TODO что такое ipfs>