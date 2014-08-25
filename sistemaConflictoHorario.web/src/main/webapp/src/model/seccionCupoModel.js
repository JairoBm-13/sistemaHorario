/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['model/seccionCupoModel'], function() {
//Aquí se define la estructura de un ítem de la lista. Note que el modelo extiende el modelo estándar backbone.
    App.Model.CursoCupoModel = Backbone.Model.extend({
        defaults: {
         'seccion' : '',
         'cuposMaximos':'',
         'cupos' : ''
        },
        getDisplay: function(name) {
         return this.get(name);
        }
        });
//Aquí se define el modelo de la lista. El modelo de la lista extiende de Backbone.Collection. En el atributo ‘model’ se define el modelo  (definido arriba) que corresponde al molde de cada uno de los ítems de la lista.
    App.Model.CursoCupoList = Backbone.Collection.extend({
        model: App.Model.CursoCupoModel
    });
    return  App.Model.CursoCupoModel;
});

