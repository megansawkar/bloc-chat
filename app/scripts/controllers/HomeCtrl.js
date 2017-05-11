(function() {
		function HomeCtrl(Room, Message, $cookies, $uibModal, $scope) {
				this.rooms = Room.all;
			  this.newMessage = {};
				this.showMessage = false;
			
				this.addRoom = function() {
						$uibModal.open({
								templateUrl: '/templates/modal.html',
								size: 'sm',
								controller: 'ModalCtrl as modal'
						});
						
						ga('send', {
							hitType: 'event',
							eventCategory: 'Room',
							eventAction: 'add',
							eventLabel: 'New Room'
						});
				}
				
				this.setCurrentRoom = function(room) {
						ga('send', {
							hitType: 'event',
							eventCategory: 'Room',
							eventAction: 'set',
							eventLabel: 'Set Current Room'
						});
					
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
					//clear out message-input on view
					$scope.content = null;
					
					ga('send', {
						hitType: 'event',
						eventCategory: 'Message',
						eventAction: 'add',
						eventLabel: 'New Message'
					});
				}
				
		}
		

		angular
				.module('blocChat') 
				.controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', '$scope', HomeCtrl]);
})();