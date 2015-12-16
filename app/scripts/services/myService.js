'use strict';

/**
 * @ngdoc service
 * @name testApp.myService
 * @description
 * # myService
 * Service in the testApp.
 */
app.service('myService', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
      var uid = 1;   // Create unique contact id
      var i;
  /*****array to hold initial contacts data to be displayed on the table*****/
      var contacts = [
	  {       //contacts array to hold list of all contacts
        id: 0,
        'name': 'Kevin',
        'email': 'knnjoroge@email.com',
        'phone': '123-456-789'
      },
	  {       //contacts array to hold list of all contacts
        id: 1,
        'name': 'Carry',
        'email': 'carrypatt@email.com',
        'phone': '987-654-321'
      }
	  ];

  /*****method that passes new contact details to contacts array*****/
  this.save = function(contact){     //save method create a new contact if not already exists else update the existing object
    if(contact.id == null){
            //if this is new contact, add it in contacts array
      contact.id = uid++;
      contacts.push(contact);
    }else {   //for existing contact, find this contact using id and update it.
      for(i in contacts){
        if(contacts[i].id == contact.id){
          contacts[i] = contact;
        }
      }
    }
  };

  /*****Simply search contacts list for given id and returns the contact object if found*****/
  this.get = function(id){
    for (i in contacts){
      if(contacts[i].id == id){
        return contacts[i];
      }
    }
  };

  /*****Iiterate through contacts list and delete contact if found*****/
  this.delete = function(id){
    for(i in contacts){
      if(contacts[i].id == id){
        contacts.splice(i, 1);
      }
    }
  };

  /*****simply returns the contacts list*****/
  this.list = function(){
    return contacts;
  };

  });
