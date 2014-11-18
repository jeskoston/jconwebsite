/*This script is in charge of implementing the 
"Jesse Contreras" bubbles in the index page, 
the code is pretty darn obvious*/
$(function() {
        var canvas = $("#c");
        var canvasHeight;
        var canvasWidth;
        var ctx;
        var dt = 0.1;
        
        var pointCollection;
        
        function init() {
                updateCanvasDimensions();
                //Highest points for dots (y) =  18
				//Lowest Points for fots (y) =   76
				 var charcoal = "#333333";//"#FF3333";//charcoal --->
				/* var yellow = "#FFFF66";//yellow
				 var blue = "#3399CC";//blue
				 var purple = "#CC6699";//purple
				 var green = "#66CC66";//green*/
				
                var g = [
				//J
				new Point(20, 18, 0.0, 5, charcoal),
				new Point(30, 18, 0.0, 4, charcoal),
				new Point(41, 18, 0.0, 5, charcoal), 
				new Point(52, 18, 0.0, 4, charcoal), 
				new Point(65, 18, 0.0, 5, charcoal), 
				new Point(43, 28, 0.0, 4, charcoal), 
				new Point(43, 40, 0.0, 4, charcoal), 
				new Point(43, 52, 0.0, 5, charcoal), 
				new Point(43, 63, 0.0, 4, charcoal), 
				new Point(41, 73, 0.0, 5, charcoal), 
				new Point(30, 74, 0.0, 4, charcoal), 
				new Point(22, 66, 0.0, 5, charcoal), 
				//e
				new Point(63, 42, 0.0, 4,  charcoal), 
				new Point(62, 53, 0.0, 5,  charcoal), 
				new Point(62, 65, 0.0, 4,  charcoal), 
				new Point(71, 73, 0.0, 5,  charcoal), 
				new Point(82, 76, 0.0, 5,  charcoal), 
				new Point(93, 71, 0.0, 4,  charcoal), 
				new Point(72, 38, 0.0, 4,  charcoal), 
				new Point(83, 36, 0.0, 5,  charcoal), 
				new Point(92, 42, 0.0, 4,  charcoal),  
				new Point(89, 52, 0.0, 4,  charcoal),
				new Point(80, 56, 0.0, 4,  charcoal), 
				new Point(71, 56, 0.0, 4,  charcoal),
				//s
				new Point(126, 36, 0.0, 5, charcoal), 
				new Point(116, 35, 0.0, 4, charcoal), 
				new Point(108, 41, 0.0, 4, charcoal), 
				new Point(114, 49, 0.0, 4, charcoal), 
				new Point(121, 55, 0.0, 4, charcoal), 
				new Point(128, 59, 0.0, 4, charcoal), 
				new Point(132, 66, 0.0, 4, charcoal), 
				new Point(126, 72, 0.0, 4, charcoal),  
				new Point(118, 76, 0.0, 4, charcoal), 
				new Point(110, 72, 0.0, 5, charcoal),
				//s
				new Point(159, 36, 0.0, 5, charcoal), 
				new Point(150, 35, 0.0, 4, charcoal), 
				new Point(142, 41, 0.0, 4, charcoal), 
				new Point(150, 49, 0.0, 4, charcoal), 
				new Point(155, 55, 0.0, 4, charcoal), 
				new Point(162, 59, 0.0, 4, charcoal), 
				new Point(166, 66, 0.0, 4, charcoal), 
				new Point(160, 72, 0.0, 4, charcoal),  
				new Point(152, 76, 0.0, 4, charcoal), 
				new Point(144, 72, 0.0, 5, charcoal),
				
				//e
				new Point(180, 42, 0.0, 4, charcoal), 
				new Point(179, 53, 0.0, 5, charcoal), 
				new Point(179, 65, 0.0, 4, charcoal), 
				new Point(188, 73, 0.0, 5, charcoal), 
				new Point(199, 76, 0.0, 5, charcoal), 
				new Point(210, 71, 0.0, 4, charcoal), 
				new Point(189, 38, 0.0, 4, charcoal), 
				new Point(200, 36, 0.0, 5, charcoal), 
				new Point(209, 42, 0.0, 4, charcoal),  
				new Point(206, 52, 0.0, 4, charcoal),
				new Point(197, 56, 0.0, 4, charcoal), 
				new Point(188, 56, 0.0, 4, charcoal),
				//C
				new Point(275, 28, 0.0, 4, charcoal), 
				new Point(268, 21, 0.0, 4, charcoal), 
				new Point(255, 18, 0.0, 6, charcoal), 
				new Point(245, 27, 0.0, 5, charcoal), 
				new Point(244, 41, 0.0, 5, charcoal), 
				new Point(245, 55, 0.0, 6, charcoal), 
				new Point(249, 68, 0.0, 6, charcoal), 
				new Point(257, 76, 0.0, 4, charcoal), 
				new Point(266, 75, 0.0, 4, charcoal),  
				new Point(275, 69, 0.0, 4, charcoal),  
				//o
				new Point(305, 36, 0.0, 6, charcoal), 
				new Point(295, 44, 0.0, 5, charcoal), 
				new Point(291, 54, 0.0, 4, charcoal), 
				new Point(290, 65, 0.0, 4, charcoal),
				new Point(295, 74, 0.0, 4, charcoal),
				new Point(305, 76, 0.0, 4, charcoal), 
				new Point(314, 71, 0.0, 4, charcoal), 
				new Point(319, 62, 0.0, 4, charcoal), 
				new Point(318, 52, 0.0, 4, charcoal), 
				new Point(314, 42, 0.0, 4, charcoal), 
				//n
				new Point(332, 76, 0.0, 4, charcoal), 
				new Point(332, 68, 0.0, 4, charcoal), 
				new Point(333, 59, 0.0, 4, charcoal),
				new Point(333, 48, 0.0, 5, charcoal),
				new Point(333, 36, 0.0, 5, charcoal),
				new Point(341, 44, 0.0, 4, charcoal),
				new Point(350, 43, 0.0, 5, charcoal), 
				new Point(355, 50, 0.0, 4, charcoal), 
				new Point(357, 59, 0.0, 4, charcoal), 
				new Point(358, 67, 0.0, 4, charcoal), 
				new Point(358, 76, 0.0, 4, charcoal),  
				//t
				new Point(378, 76, 0.0, 4, charcoal), 
				new Point(378, 68, 0.0, 4, charcoal), 
				new Point(378, 59, 0.0, 5, charcoal),
				new Point(378, 48, 0.0, 4, charcoal),
				new Point(378, 40, 0.0, 4, charcoal),
				new Point(370, 40, 0.0, 4, charcoal),
				new Point(386, 40, 0.0, 4, charcoal),
				new Point(378, 30, 0.0, 5, charcoal),
				//r
				new Point(400, 76, 0.0, 4, charcoal), 
				new Point(400, 68, 0.0, 4, charcoal), 
				new Point(400, 59, 0.0, 4, charcoal),
				new Point(400, 48, 0.0, 4, charcoal),
				new Point(400, 36, 0.0, 5, charcoal),
				new Point(410, 43, 0.0, 4, charcoal),
				new Point(417, 36, 0.0, 5, charcoal),
				//e
				new Point(431, 42, 0.0, 4, charcoal), 
				new Point(430, 53, 0.0, 5, charcoal), 
				new Point(430, 65, 0.0, 4, charcoal), 
				new Point(439, 73, 0.0, 5, charcoal), 
				new Point(450, 76, 0.0, 5, charcoal), 
				new Point(461, 71, 0.0, 4, charcoal), 
				new Point(440, 38, 0.0, 4, charcoal), 
				new Point(451, 36, 0.0, 5, charcoal), 
				new Point(460, 42, 0.0, 4, charcoal),  
				new Point(457, 52, 0.0, 4, charcoal),
				new Point(448, 56, 0.0, 4, charcoal), 
				new Point(439, 56, 0.0, 4, charcoal),
				//r
				new Point(477, 76, 0.0, 4, charcoal), 
				new Point(477, 68, 0.0, 4, charcoal), 
				new Point(477, 59, 0.0, 4, charcoal),
				new Point(477, 48, 0.0, 4, charcoal),
				new Point(477, 36, 0.0, 5, charcoal),
				new Point(487, 43, 0.0, 4, charcoal),
				new Point(494, 36, 0.0, 5, charcoal),
				//a
				new Point(502, 60, 0.0, 4, charcoal), 
				new Point(506, 49, 0.0, 4, charcoal), 
				new Point(512, 41, 0.0, 4, charcoal),
				new Point(505, 70, 0.0, 5, charcoal),
				new Point(512, 76, 0.0, 4, charcoal),
				new Point(521, 36, 0.0, 4, charcoal),
				new Point(521, 75, 0.0, 4, charcoal),
				new Point(527, 68, 0.0, 4, charcoal),
				new Point(526, 58, 0.0, 5, charcoal),
				new Point(525, 47, 0.0, 5, charcoal),
				new Point(532, 77, 0.0, 5, charcoal),
				//s 
				new Point(561, 36, 0.0, 5, charcoal), 
				new Point(552, 35, 0.0, 4, charcoal), 
				new Point(544, 41, 0.0, 4, charcoal), 
				new Point(552, 49, 0.0, 4, charcoal), 
				new Point(557, 55, 0.0, 4, charcoal), 
				new Point(564, 59, 0.0, 4, charcoal), 
				new Point(568, 66, 0.0, 4, charcoal), 
				new Point(562, 72, 0.0, 4, charcoal),  
				new Point(554, 76, 0.0, 4, charcoal), 
				new Point(546, 72, 0.0, 5, charcoal),	
				];
                
                gLength = g.length;
                for (var i = 0; i < gLength; i++) {
                        g[i].curPos.x = (canvasWidth/5.5 - 180) + g[i].curPos.x;
                        g[i].curPos.y = (canvasHeight/10 - 65) + g[i].curPos.y;
                        
                        g[i].originalPos.x = (canvasWidth/5.5 - 180) + g[i].originalPos.x;
                        g[i].originalPos.y = (canvasHeight/10 - 65) + g[i].originalPos.y;
                };
                
                pointCollection = new PointCollection();
                pointCollection.points = g;
                
                initEventListeners();
                timeout();
        };
        
        function initEventListeners() {
		$(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);

		canvas.get(0).ontouchmove = function(e) {
			e.preventDefault();
			onTouchMove(e);
		};

		canvas.get(0).ontouchstart = function(e) {
			e.preventDefault();
		};
	};

	function updateCanvasDimensions() {
		canvas.attr({height: $(window).height(), width: $(window).width()});
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();

		draw();
	};

	function onMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.pageX, e.pageY);
	};

	function onTouchMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
	};

	function timeout() {
		draw();
		update();

		setTimeout(function() { timeout() }, 30);
	};

	function draw() {
		var tmpCanvas = canvas.get(0);

		if (tmpCanvas.getContext == null) {
			return; 
		};

		ctx = tmpCanvas.getContext('2d');
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);

		if (pointCollection)
			pointCollection.draw();
	};

	function update() {		
		if (pointCollection)
			pointCollection.update();
	};

	function Vector(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
 
		this.addX = function(x) {
			this.x += x;
		};

		this.addY = function(y) {
			this.y += y;
		};

		this.addZ = function(z) {
			this.z += z;
		};
 
		this.set = function(x, y, z) {
			this.x = x; 
			this.y = y;
			this.z = z;
		};
	};

	function PointCollection() {
		this.mousePos = new Vector(0, 0);
		this.points = new Array();

		this.newPoint = function(x, y, z) {
			var point = new Point(x, y, z);
			this.points.push(point);
			return point;
		};

		this.update = function() {		
			var pointsLength = this.points.length;

			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];

				if (point == null)
					continue;

				var dx = this.mousePos.x - point.curPos.x;
				var dy = this.mousePos.y - point.curPos.y;
				var dd = (dx * dx) + (dy * dy);
				var d = Math.sqrt(dd);

				if (d < 150) {
					point.targetPos.x = (this.mousePos.x < point.curPos.x) ? point.curPos.x - dx : point.curPos.x - dx;
					point.targetPos.y = (this.mousePos.y < point.curPos.y) ? point.curPos.y - dy : point.curPos.y - dy;
				} else {
					point.targetPos.x = point.originalPos.x;
					point.targetPos.y = point.originalPos.y;
				};

				point.update();
			};
		};

		this.draw = function() {
			var pointsLength = this.points.length;
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];

				if (point == null)
					continue;

				point.draw();
			};
		};
	};

	function Point(x, y, z, size, colour) {
		this.colour = colour;
		this.curPos = new Vector(x, y, z);
		this.friction = 0.8;
		this.originalPos = new Vector(x, y, z);
		this.radius = size;
		this.size = size;
		this.springStrength = 0.1;
		this.targetPos = new Vector(x, y, z);
		this.velocity = new Vector(0.0, 0.0, 0.0);

		this.update = function() {
			var dx = this.targetPos.x - this.curPos.x;
			var ax = dx * this.springStrength;
			this.velocity.x += ax;
			this.velocity.x *= this.friction;
			this.curPos.x += this.velocity.x;

			var dy = this.targetPos.y - this.curPos.y;
			var ay = dy * this.springStrength;
			this.velocity.y += ay;
			this.velocity.y *= this.friction;
			this.curPos.y += this.velocity.y;

			var dox = this.originalPos.x - this.curPos.x;
			var doy = this.originalPos.y - this.curPos.y;
			var dd = (dox * dox) + (doy * doy);
			var d = Math.sqrt(dd);

			this.targetPos.z = d/100 + 1;
			var dz = this.targetPos.z - this.curPos.z;
			var az = dz * this.springStrength;
			this.velocity.z += az;
			this.velocity.z *= this.friction;
			this.curPos.z += this.velocity.z;

			this.radius = this.size*this.curPos.z;
			if (this.radius < 1) this.radius = 1;
		};

		this.draw = function() {
			ctx.fillStyle = this.colour;
			ctx.beginPath();
			ctx.arc(this.curPos.x, this.curPos.y, this.radius, 0, Math.PI*2, true);
			ctx.fill();
		};
	};
	
	init();
	//$(window).on("resize", init);
});