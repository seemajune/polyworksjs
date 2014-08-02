PWG.PhaserTileMapManager = function() {
	var module = {};

	function TileMapController(config) {
		this.map = PWG.Game.phaser.add.tilemap();

		//  Add a Tileset image to the map
		this.map.addTilesetImage(config.image);

		if(config.layers) {
			this.layers = {};
			
			PWG.Utils.each(
				config.layers,
				function(lyr, key) {
					var layer = map.createBlankLayer(key, lyr.width, lyr.height, lyr.tileW, lyr.tileH, lyr.group);
					layer.scrollFactorX = lyr.scrollFactorX;
					layer.scrollFactorY = lyr.scrollFactorY;

					if(lyr.tiles) {
						PWG.Utils.each(
							lyr.tiles,
							function(tile) {
								this.map.putTile(tile.index, tile.x, this.y, lyr);
							},
							this
						);
					}
					
					if(lyr.resizeWorld) {
						layer.resizeWorld();
					}

					this.layers[key] = layer;
				},
				this
			);
		}
	}

	module.TileMapController = TileMapController; 
	
	module.build = function(map) {
		switch (map.type) {
		case TileMapTypes.DATA:
			module.buildDataTileMap(map);
			break;

		default:
			trace('ERROR unknown tile map type: ' + map.type);
			break;
		}
	};

	module.buildDataTileMap = function(map) {

	};

	return module;
}();
