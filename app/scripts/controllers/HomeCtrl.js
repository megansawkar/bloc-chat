(function() {
		function HomeCtrl(Room, Message, $cookies, $uibModal) {
				this.rooms = Room.all;
			  this.newMessage = {};
				this.showMessage = false;
			
				this.addRoom = function() {
						$uibModal.open({
								templateUrl: '/templates/modal.html',
								size: 'sm',
								controller: 'ModalCtrl as modal'
						});
				}
				
				this.setCurrentRoom = function(room) {
						this.currentRoom = room;
						this.showMessage = true;
						this.messages = Message.getByRoomId(this.currentRoom.$id);
						console.log(room)
				}
				
				this.createNewMessage = function(newMessage) {
					this.newMessage.roomId = this.currentRoom.$id;
					this.newMessage.content = newMessage;
					this.newMessage.username = $cookies.get('blocChatCurrentUser');
					Message.addMessage(this.newMessage);	
				}
				
		}

		angular
				.module('blocChat') 
				.controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();