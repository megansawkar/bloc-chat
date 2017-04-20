(function() {
		function ModalCtrl(Room, $uibModalInstance, $cookies) {
				this.cancel = function() {
						$uibModalInstance.dismiss();
				};
			
				this.submit = function(roomName) {
						Room.add(roomName);
						$uibModalInstance.dismiss();
				};
			
				this.newUserName = function(username) {
						$cookies.put('blocChatCurrentUser', username);
						$uibModalInstance.dismiss();
				};
		}
	
		angular 
				.module('blocChat')
				.controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();