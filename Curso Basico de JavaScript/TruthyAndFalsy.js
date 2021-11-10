// Que tipo de valor es verdadero y falso

Boolean();
// false

Boolean(0);
// false

Boolean(null);
// false

Boolean(NaN);
// false

Boolean(undefined);
// false

Boolean(false);
// false

Boolean("");
// false

Boolean(" ");
// true

Boolean("a");
// true

Boolean(1);
// true

Boolean([]);
// true

Boolean({});
// true

Boolean(function(){});
// true

Boolean(true);
// true