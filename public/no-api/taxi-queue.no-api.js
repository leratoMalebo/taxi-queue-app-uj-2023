document.addEventListener('alpine:init', () => 
{
	

	Alpine.data('TaxiQueue', () => 
	{

		return {
			version: 'no-api-1.0',
<<<<<<< HEAD
			passengers:0,
			taxi_count:0,
			joinQueue() 
			{
				
				this.passengers+=1;
				
			},
			leaveQueue() 
			{
				this.passengers-=1;
			
			},

			joinTaxiQueue() 
			{
				this.taxi_count+=1;
			},

			queueLength() 
			{
				this.passengers;
			},

			taxiQueueLength() 
			{
				this.taxi_count;
				
			},

			taxiDepart() 
			{
				if(this.queueLength===15&&this.taxiQueueLength===1)
				{
					this.taxi_count-=1;
					this.passengers===0
				}
=======
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

>>>>>>> 6392e4386f5911e67e412a38293df2853a93f95d
			}
		}


<<<<<<< HEAD

});

	

=======
>>>>>>> 6392e4386f5911e67e412a38293df2853a93f95d
});


