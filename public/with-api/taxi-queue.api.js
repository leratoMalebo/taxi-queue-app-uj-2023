document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'api-1.0',
			queueLength: 0,
			init() {
				axios
					.get('/api/passenger/queue')
					.then(result => {
						// an example API call
						this.queueLength = result.data.queueCount
					});
			},
			joinQueue() {

			},
			leaveQueue() {

			},

			joinTaxiQueue() {

			},

			queueLength() {

			},

			taxiQueueLength() {

			},

			taxiDepart() {

			}
		}
	});

<<<<<<< HEAD

	function TaxiQueue() {


		function joinQueue() 
		{
			
			let passengers=0;
				
			passengers+=1;

			return passengers;
				
		
		}
	
		function leaveQueue() {
	
		}
	
		function joinTaxiQueue() {
	
		}
	
		function queueLength() {
	
		}
	
		function taxiQueueLength() 
		{
	
		}
	
		function taxiDepart()
		{
	
		}
	
		return {
			joinQueue,
			leaveQueue,
			joinTaxiQueue,
			queueLength,
			taxiQueueLength,
			taxiDepart
		}
	}

=======
>>>>>>> 6392e4386f5911e67e412a38293df2853a93f95d
});


