var target = {
		general_info: {
			name: 'Archy',
			surname: 'Sharp',
			age: 21,
			location: 'Belarus'
		},
		achievements: [
			{
				distance: 0.1,
				time: 11.3
			},
			{
				distance: 6,
				time: 30
			},
			{
				distance: 10,
				time: 50
			}
		]
	},
	xjsons = _.xjsons('{\
		general_info(general): {\
			(name): s,\
			(surname): s,\
			(age): i,\
			(location): s\
		},\
		achievements(results): [%{\
			(distance): d,\
			(time): d\
		}%]\
	}'),
	processor = _.xjsonsProcessor(xjsons.parse(), target);

processor.error(function(msg) {
	alert(msg);
});

processor.process();

/*
target = {
		general: {
			name: 'Archy',
			surname: 'Sharp',
			age: 21,
			location: 'Belarus'
		},
		results: [
			{
				distance: 0.1,
				time: 11.3
			},
			{
				distance: 6,
				time: 30
			},
			{
				distance: 10,
				time: 50
			}
		]
	}
*/
