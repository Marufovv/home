export const rooms = [
 {id:'living-room',name:'Mehmonxona',subtitle:'Mehmondo‘stlikning yangi talqini.',area:96,days:45,cost:[24500,14500,28000,5000],materials:['Tabiiy marmar','Yong‘oq shponi','Kristall yoritgich'],description:'Baland derazalar, iliq yorug‘lik va keng suhbat maydoni. Yaqinlaringiz bilan unutilmas uchrashuvlar uchun.'},
 {id:'kitchen',name:'Oshxona va kofe burchagi',subtitle:'Kundalik lahzalarning go‘zalligi.',area:28,days:30,cost:[10000,6500,17500,4000],materials:['Kvars stol yuzasi','Yong‘oq shponi','Latun furnitura'],description:'Ixcham orol, puxta joylashtirilgan jihozlar va tabiiy materiallar. Tongni yoqimli boshlash uchun o‘ylangan makon.'},
 {id:'master-bedroom',name:'Asosiy yotoqxona',subtitle:'Sizga atalgan sokinlik.',area:48,days:35,cost:[14000,8500,18500,3000],materials:['Muhandislik parketi','Yumshoq tekstil','Dekorativ panellar'],description:'Bog‘ga ochilgan manzara, muloyim ranglar va shaxsiy dam olish burchagi. Har kunning osoyishta yakuni.'},
 {id:'kids-bedroom',name:'Bolalar xonasi',subtitle:'Katta orzular uchun kichik olam.',area:24,days:25,cost:[7000,4500,8500,2000],materials:['Yog‘och parket','Yuviladigan bo‘yoq','Tabiiy tekstil'],description:'O‘qish, o‘ynash va dam olish bir makonda. Yorug‘ ish stoli va qulay saqlash joylari.'},
 {id:'guest-bedroom',name:'Mehmon yotoqxonasi',subtitle:'O‘z uyidek yaqin.',area:30,days:28,cost:[9000,6000,10500,2500],materials:['Yog‘och reykalar','Yumshoq gilam','Latun aksentlar'],description:'To‘q ko‘k aksentlar, iliq yog‘och va alohida o‘qish burchagi. Har bir mehmon uchun e’tibor.'},
 {id:'study-room',name:'O‘quv va ijod xonasi',subtitle:'Ilhom birga boshlanadi.',area:36,days:30,cost:[10000,6500,13000,2500],materials:['Yong‘oq shponi','Akustik tekstil','Yog‘och parket'],description:'Uchta ish joyi, umumiy ijod stoli va deraza yonidagi o‘rindiqlar. Izlanish va yangi g‘oyalar uchun.'},
 {id:'family-lounge',name:'Oilaviy dam olish',subtitle:'Eng yaqinlar davrasida.',area:58,days:32,cost:[13000,8000,18000,3000],materials:['Yog‘och parket','Buyurtma kutubxona','Yumshoq tekstil'],description:'Katta divan, kitob javonlari va sokin suhbat burchaklari. Oilaning sevimli uchrashuv joyi.'},
 {id:'game-room',name:'O‘yin xonasi',subtitle:'Yaxshi kayfiyatning o‘z manzili.',area:72,days:32,cost:[14500,8500,21000,4000],materials:['Yog‘och parket','Panoramali oynalar','Bilyard va tennis jihozlari'],description:'Bilyard, stol tennisi va panoramali dam olish maydoni. Do‘stlar bilan vaqtning qanday o‘tganini sezmaysiz.'},
 {id:'library',name:'Kutubxona',subtitle:'Fikrlar uchun kenglik.',area:32,days:28,cost:[10000,6500,16000,2500],materials:['Yong‘oq yog‘ochi','Tabiiy tosh','Latun yoritgichlar'],description:'Polidan shiftigacha kitob javonlari va bog‘ga qaragan ish stoli. Diqqat va osoyishtalik uyg‘unligi.'},
 {id:'dining-room',name:'Ziyofat zali',subtitle:'Bir dasturxon atrofida.',area:108,days:42,cost:[23000,12000,28000,5000],materials:['Tabiiy marmar','Yog‘och stol va stullar','Kristall yoritgichlar'],description:'Uzun dasturxonlar, baland derazalar va nafis yoritish. Bayramlar ham, oddiy uchrashuvlar ham o‘zgacha.'},
 {id:'pool-lounge',name:'Basseyn yonidagi zal',subtitle:'Ichkari va tashqari uyg‘unligi.',area:68,days:35,cost:[17000,9000,22000,4000],materials:['Marmar pol','Yog‘och panellar','Panoramali oynalar'],description:'Basseyn manzarasi, keng divanlar va davra suhbati uchun stol. Bog‘ning sokinligi uy ichida davom etadi.'},
 {id:'spa-pool',name:'Yopiq basseyn',subtitle:'Har kun — o‘zingizga vaqt.',area:120,days:70,cost:[42000,23000,32000,18000],materials:['Sirpanishga chidamli tosh','Basseyn mozaikasi','Gidroizolyatsiya'],description:'Yopiq basseyn, dam olish yotoqlari va bog‘ga ochilgan manzara. Suv, yorug‘lik va xotirjamlik.'},
 {id:'rooftop',name:'Tom ayvoni',subtitle:'Osmon ostidagi uchrashuvlar.',area:160,days:45,cost:[24000,14000,18000,6000],materials:['Tashqi keramogranit','Ob-havoga chidamli mebel','Zanglamas po‘lat'],description:'Quyosh botishi, ochiq osmon va katta dasturxon. Yozgi kechalar uchun dam olish va barbekyu maydoni.'},
 {id:'prayer-room',name:'Ibodat xonasi',subtitle:'Qalbga yaqin sokin makon.',area:30,days:25,cost:[10000,5000,7000,2000],materials:['Yumshoq gilam','Tabiiy marmar','Yog‘och javonlar'],description:'Sodda kompozitsiya, mayin yorug‘lik va osoyishta muhit. Tafakkur va ibodatga ajratilgan shaxsiy makon.'}
];
export const baseCosts=[['Loyiha va poydevor',165000],['Devorlar va konstruksiya',210000],['Tom va fasad',155000],['Umumiy muhandislik tarmoqlari',85000],['Hovli, bog‘ va tashqi basseyn',110000]];
export const phases=[
 {name:'Loyiha va poydevor',months:'1–3-oy',start:0,length:3,detail:'Rejalashtirish, geologiya, poydevor va gidroizolyatsiya.'},
 {name:'Devor va konstruksiya',months:'4–7-oy',start:3,length:4,detail:'Asosiy karkas, devorlar, qavatlararo yopmalar.'},
 {name:'Tom va fasad',months:'7–10-oy',start:6,length:4,detail:'Tom, issiqlik himoyasi, derazalar va tashqi pardoz.'},
 {name:'Muhandislik tarmoqlari',months:'9–12-oy',start:8,length:4,detail:'Elektr, isitish, sovitish, suv va kanalizatsiya.'},
 {name:'Interyer va jihozlash',months:'11–17-oy',start:10,length:7,detail:'Xonalar parallel ravishda pardozlanadi va jihozlanadi.'},
 {name:'Bog‘ va topshirish',months:'16–18-oy',start:15,length:3,detail:'Obodonlashtirish, tizimlarni tekshirish va yakuniy ko‘rik.'}
];
export const roomTotal=rooms.reduce((a,r)=>a+r.cost.reduce((x,y)=>x+y,0),0);
export const baseTotal=baseCosts.reduce((a,r)=>a+r[1],0);
export const reserve=(roomTotal+baseTotal)*.1;
export const total=roomTotal+baseTotal+reserve;
