
//Da la fecha actual
let a = new Date();
console.log(a);

//Da la fecha con milisegundos dados
let b = new Date(50000);
console.log(b);

//Da la fecha fecha en string -- **new Date(año_num,mes_num,dia_num[,hor_num,min_num,seg_num,mils_num])** []opcional
let c = new Date("2003-04-21");
console.log(c);

//Milsegundos desde 1970 1 enero hasta ahora
console.log(Date.now());

//Milsegundos desde 1970 1 enero hasta fecha dada dentro de la funcion
console.log(Date.parse("2004-05-04"));

//Fecha to string
console.log(a.toString());

//Año de la fecha
console.log(a.getFullYear());

//Mes de la fecha(Recuerda que enero es el mes 0)
console.log(a.getMonth());

//Dia de la fecha
console.log(a.getDate());

//Dia de la semana de la fecha **(0=domingo 6:sábado)**
console.log(a.getDay());

//Horas minutos segundos y milisegundos de la fecha
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());

//Milsegundos desde 1970 1 enero hasta la fecha del objeto
console.log(a.getTime());