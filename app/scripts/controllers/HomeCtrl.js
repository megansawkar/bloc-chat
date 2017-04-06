(function() {
		function HomeCtrl(Room, Message, $uibModal) {
				this.rooms = Room.all;
			  this.newMessage = {};
			
				this.addRoom = function() {
						$uibModal.open({
								templateUrl: '/templates/modal.html',
								size: 'sm',
								controller: 'ModalCtrl as modal'
						});
				}
				
				this.setCurrentRoom = function (room) {
						this.currentRoom = room;
						this.messages = Message.getByRoomId(this.currentRoom.$id);
						console.log(this.messages)
				}
				
				this.createNewMessage = function () {
					this.newMessage.roomId = '';
					this.newMessage.content = '';
					this.newMessge.username = '';
					Message.add(this.newMessage);	
				}
		}
	
		angular
				.module('blocChat')
				.controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();