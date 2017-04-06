(function() {
		function Message($firebaseArray) {
				var ref = firebase.database().ref().child("messages");
				var messages = $firebaseArray(ref);
			
				Message.getByRoomId = function (roomId){
						return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
				}
				
				this.addMessage = function(newMessage) {
							//newMessage.sentAt = ...
							messages.$add(newMessage);
				};
				
				return Message;
			
				
//				return {
//						getByRoomId: function (roomId) {
//								$firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
//						}
//				}
		}
	
		angular 
				.module('blocChat')
				.factory('Message', ['$firebaseArray', Message]);
})();