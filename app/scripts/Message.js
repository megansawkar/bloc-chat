(function() {
		function Message($firebaseArray) {
				var ref = firebase.database().ref().child("messages");
				var messages = $firebaseArray(ref);
			
				Message.getByRoomId = function (roomId){
						return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
				}
				
				Message.addMessage = function(newMessage) {
						newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
						messages.$add(newMessage);
				};
			
				return Message;
		}
	
		angular 
				.module('blocChat')
				.factory('Message', ['$firebaseArray', Message]);
})();