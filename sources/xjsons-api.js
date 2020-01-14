
//~ <component>
//~	Name: XJSONS Api
//~	Info: API file of xjsons
//~ </component>


_.xjsons = function(str) {
	return new XjsonsParser(str);
};

_.xjsonsProcessor = function(schema, obj) {
	return new XjsonsProcessor(schema, obj);
};