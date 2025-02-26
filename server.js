const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");  // File System modülünü dahil et

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

let books = [
    { id: 1, title: "Sefiller", author: "George Orwell", content: 
        "Paris’in dar ve kasvetli sokakları, şehrin yoksul mahallelerini sararken, Jean Valjean adımlarını hızlandırdı. Yıpranmış paltosu soğuktan onu koruyamazken, içindeki umut kırıntıları ayakta kalmasını sağlıyordu. Uzun yıllar süren mahkûmiyetin ardından, özgürlük kelimesi hâlâ ona yabancıydı. Cebinde kalan son birkaç kuruşla, açlığını bastıracak bir ekmek bulma umuduyla ilerledi.Bir fırının önüne geldiğinde, camınarkasında sıralanmış taze ekmekleri gördü. Midesi burkuldu. Etrafına göz gezdirerek, kimsenin dikkatini çekmedenbir tanesini kapıp kaçmayı düşündü. Fakat içinde beliren bir ses, vicdanının derinliklerinden gelen bir yankı, onu durdurdu.Hırsızlık yapmanın getireceği sonuçları biliyordu.Tam o anda, fırının sahibi dışarı çıktı ve Jean Valjean’adikkatlice baktı. Yüzünde sert ama anlayışlı bir ifade vardı. Aç mısın, dostum? diye sordu. Valjean başını eğdi, kelimeler boğazına düğümlendi. Adam, bir somun ekmeği onauzattığında, gözleri doldu. Bu küçük iyilik, onun kaderini değiştirecek büyük olayların başlangıcıydı.Ancak peşindeki gölge, müfettiş Javert, onun izini sürüyordu. Geçmişinden kaçabileceğini sanıyordu, fakat Paris’in sokaklarında adaletin gölgesi her zaman peşindeydi.Önünde iki yol vardı: Kendi kaderine teslim olmak ya da geçmişini geride bırakıp yeni bir insan olmak için mücadele etmek."
     },
    { id: 2, title: "Savaş ve Barış", author: "Tolstoy", content: 
        "Soğuk bir rüzgâr Moskova sokaklarında dolaşıyordu. Şehrin üzerini kaplayan gri bulutlar, yaklaşan kışın habercisiydi. Kont Rostov, geniş çalışma odasında ağır ahşap masanın başında oturuyor, parmakları titreyerek önündeki mektupları çeviriyordu. Kâğıdın üzerinde mürekkep lekeleri vardı, bazı satırlar silinmiş, bazılarıysa aceleyle karalanmıştı. Odanın köşesindeki şöminede yanan ateşin çıtırtısı, ağır bir sessizliği bozuyor, fakat Kont'un içindeki huzursuzluğu dindiremiyordu.Birkaç hafta önce, oğlu Nikolay'dan gelen mektup, onun yüreğine hem gurur hem de endişe salmıştı. Baba, diye başlıyordu mektup, ordu hızla batıya ilerliyor. Fransızların gücünü kırdık, ama yolumuz uzun ve çetin. Kış kapımızda, askerlerimiz yorulmuş durumda. Fakat şerefimiz için, vatanımız içinsonuna kadar savaşacağız. Bu sözleri okurken, Kont Rostov'un gözleri dolmuştu. Oğlunun cesaretiyle gurur duyuyordu ama her geçen gün, onun sağ salim geri dönüp dönmeyeceği korkusu içinde büyüyordu.O sırada kapı aralandı ve odaya Natasha girdi. Üzerinde kalın bir şal vardı; yüzü solgun, bakışları endişeliydi. Baba, dedi alçak sesle, annem seni çağırıyor. Bugün kendini pek iyi hissetmiyor. Kont Rostov başını sallayarak ayağa kalktı. Karısının hastalığı son zamanlarda iyice artmış, geceleri sık sık uyuyamaz olmuştu. Natasha ile birlikte geniş koridoru geçerek odasına yöneldiler. İçeri girdiklerinde Kontes Rostova, yastıkların arasında zayıf bir şekilde yatıyordu. Gözleri nemliydi, elini uzatarak kocasınınelini tuttu. Oğlumuzdan haber var mı? diye sordu titrek bir sesle.Kont, derin bir nefes aldı. Evet, mektup geldi. İyi olduğunu yazıyor, savaşa devam ettiklerini söylüyor.Endişelenme, Natasha, yakında dönecek.Fakat odadaki herkes biliyordu ki, bu savaşın ne zaman sona ereceği belirsizdi. Fransızlar geri çekiliyord ama Rus ordusu da tükenmişti. Karların Moskova'yı sardığı günlerde, cepheden gelen her haber bir umut ışığı,fakat aynı zamanda bir keder kaynağıydı.Dışarıda, kış akşamının ilk kar taneleri yavaşça düşmeye başladı. Moskova'nın üzerine sessiz bir örtüseriliyordu. Fakat bu sessizliğin ardında, yaklaşan büyük bir fırtınanın ayak sesleri duyuluyordu."  },
    { id: 3, title: "Tom Sawyer'ın Maceraları", author: "Tom", content: 
        "Mississippi Nehri’nin kıyısında, güneş batarken,Tom Sawyer ve Huck Finn, nehrin sakin akıntısını izliyorlardı. Tom, elindeki ince dal parçasıylakumların üzerinde rastgele şekiller çiziyor, Huck ise ellerini başının arkasına koyup düşüncelere dalıyordu.Hey Huck, şu eski mağaraya girmeye ne dersin? dediTom, gözleri heyecanla parlayarak. Huck kaşlarınıkaldırıp dostuna baktı. Orası lanetli diyorlar Tom,bilirsin. Geçen sene kaybolan adamı hatırlamıyor musun?Tom güldü. Bunların hepsi hikâye! Belki içeride hazine bile vardır! diye ekledi. Huck, bir an düşündü. Hayatı boyunca büyük bir maceranın hayalini kurmuştu ve Tom’un önerisi fazlasıyla cazipti. Pekala, dedi gülümseyerek. Ama eğer bir hayaletgörürsek, ilk ben kaçarım!İkili, ellerinde fenerleriyle karanlık mağaranın girişine doğru ilerlerken, nehrin sesi arkalarında giderek uzaklaşıyordu. O an, başlarına geleceklerin farkında değillerdi. Kaderin kendilerine hangi sürprizleri hazırladığını ancak zaman gösterecekti." },
    
        { id: 4, title: "Olıver Twıst", author: "Olıver", content: 
            "Londra'nın puslu sabahında, Thames Nehri boyunca uzanan dar sokaklar, yeni bir güne uyanıyordu. Oliver Twist, açlıktan içi burkulmuş halde, bir köşede oturmuş düşünüyordu. Yetimhaneden kaçtıktansonra, yaşadığı her an bir mücadeleye dönüşmüştü. Ellerini ceketinin ceplerine soktu, ince kumaşın soğuktan onu koruyamayacağını bilmesine rağmen, içgüdüsel bir hareketti bu.Köşeyi döndüğünde, Fagin’in saklandığı dar geçidinönüne geldi. İçeride kahkahalar yankılanıyor, çalıntı malların parıltıları karanlık odanın köşelerinde kayboluyordu. Fagin, yaşlı ve sinsi bir adam, Oliver’ı içeri çağırdı. Ah, sevgili çocuğum! Aç olmalısın, dedi, gözlerini kısıp gülümseyerek. Önüne konan bayat ekmeği açgözlülükle yerken, Dodger ve diğer çocuklar ona bakıyor, kendilerinden biri olup olmadığını tartıyordu.Fakat Oliver'ın kalbi temizdi. İçinde bir şeyler burada olmaması gerektiğini fısıldıyordu. Ertesi gün, Bay Brownlow’un nazik yüzüyle tanıştığında, bir umut ışığı belirdi içinde. Fakat kaderin oyunları henüz bitmemişti. Onu bekleyen yol, hala uzun ve çetin bir sınavdan geçecekti." },
   
        { id: 5, title: "Sherlock Holmes", author: "Tolstoy", content:
            "Sisli Baker Street sabahında, Londra’nın kalbinde, Sherlock Holmes, penceresinin önünde durmuş dışarıyı izliyordu. Elinde tuttuğu piposundan yükselen duman, odanın loş ışığında hafifçe dalgalanıyordu. Dr. Watson, sandalyeye oturmuş, sabah gazetesini okurken Holmes’un derin düşüncelere daldığını fark ettiBirden kapı hızla çalındı. Mrs. Hudson içeri girerekheyecanla, Efendim, bir ziyaretçiniz var, dedi. Ardından içeri giren genç kadın, titreyen sesiyle, Bay Holmes, size ihtiyacım var, dedi. Üzerindeki kıyafetlerin sade ama titizlikle seçilmiş olduğu belliydi. Korku ve endişeyle Holmes’un gözlerinin içine baktı Holmes, kadını baştan aşağı süzdü ve küçük detayları hızla aklına kazıdı. Lütfen oturun, Miss Adler, dedi sakin bir sesle. Sizi dinliyorum.Kadın, derin bir nefes aldıktan sonra konuşmaya başladı: Kardeşim dün gece aniden ortadan kayboldu. Polise başvurdum ama ilgilenmediler. Sadece siz bana yardım edebilirsiniz. Holmes, gözlerini kısarak bir an düşündü. Ardından bir gülümseme ile, Bu vakada çözülmesi gereken çok şey var, Dr. Watson. Hazırlanmalıyız, dedi. Watson, her zamanki gibi başını salladı. Macera başlamıştı."  },
    
        { id: 6, title: "Suç ve Ceza", author: "Tolstoy", content: 
            "Petersburg'un dar sokaklarında, gecenin karanlığına bürünmüş bir adam,titrek adımlarla ilerliyordu. Raskolnikov, paltosunun yakasını kaldırarak rüzgârdan korunmaya çalıştı. İçindeki huzursuzluk, sokakların sessizliğiylebirleşiyor, her adımında daha da derinleşiyordu. Elindeki eski çantanın içindeki balta, her hareketinde varlığını hissettiriyor, zihninde yankılanan düşünceleri daha da keskinleştiriyordu.Ona göre, bu bir suç değildi, adaleti sağlamak için verilmiş bir karardı.Alena İvanovna, bencil ve açgözlü bir tefeci olarak, birçok insanınhayatını sömürmüştü. Raskolnikov, onun yokluğunun toplum için bir kayıp olmadığını düşünüyordu. Fakat her ne kadar kendini haklı çıkarmaya çalışsa da, içindeki korku ve belirsizlik büyüyordu.Dar merdivenleri yavaşça çıktı, her basamakta kalbinin çarpıntısı kulaklarında yankılanıyordu. Kapıya ulaştığında, kısa bir an duraksadı. Elleri titredi, alnında biriken ter damlaları şakağından süzüldü. Derin  bir nefes alarak kapıyı çaldı. İçeriden gelen boğuk bir sesle içeri girdi.Alena İvanovna, eski bir iskemleye oturmuş, dikkatlice hesap defteriniinceliyordu. Başını kaldırmadan, Ne istiyorsun? diye sordu.Raskolnikov, birkaç adım daha attı. Çantasını açarken sesi titriyordu Rehin bırakacak bir şeyim var,dedi. Kadın başını kaldırıp ona baktığında,gözlerindeki soğuk ifade bir anlık bir şüpheye dönüştü. Ama çok geçti.Baltayı havaya kaldıran Raskolnikov, gözlerini sımsıkı kapadı ve kaderinindönüşünü belirleyecek darbeyi indirdi.Oda bir anlığına sessizliğe gömüldü. Zaman durmuş gibiydi. Nefes alışları hızlandı, gözleri karardı. Kendisini adaletin bir aracıolarak görüyordu, fakat içindeki korku, kaçınılmaz bir gerçek gibi tüm benliğini sarıyordu. Dışarıda Petersburg'un sokaklarında bir çığlık yankılandı ve kaderin ince çizgisi, karanlığa doğru sürüklenmeye başladı." }
];

// Kitapları Listele
app.get("/books", (req, res) => {
    res.json(books);
});

// Belirli Bir Kitabı Getir
app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (book) {
        // Kitap içeriğini dosyadan oku
        fs.readFile(book.content, "utf8", (err, data) => {
            if (err) {
                res.status(500).json({ message: "İçerik okunamadı" });
            } else {
                // Kitap bilgileriyle birlikte içerik kısmını döndür
                res.json({ ...book, content: data.substring(0, 100) }); // İçeriğin sadece ilk 100 karakterini döndür
            }
        });
    } else {
        res.status(404).json({ message: "Kitap bulunamadı" });
    }
});

// Yeni Kitap Ekle
app.post("/books", (req, res) => {
    const { title, author, content } = req.body;
    const newBook = { id: books.length + 1, title, author, content };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Kitap Güncelle
app.put("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (book) {
        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.content = req.body.content || book.content;
        res.json(book);
    } else {
        res.status(404).json({ message: "Kitap bulunamadı" });
    }
});

// Kitap Sil
app.delete("/books/:id", (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.json({ message: "Kitap silindi" });
});

app.listen(port, () => {
    console.log(`📚 Kitap API ${port} portunda çalışıyor...`);
});
