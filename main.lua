-- Configurations
camera = require("camera")
player = require("player")
world = require("world")

-- States
menu = require("states/MainMenuState")
game = require("states/GameState")
pause = require("states/PauseState")

-- Libaries
AdvTiledLoader = require("libs/AdvTiledLoader.Loader")
require("libs/TEsound")
require("libs/LoveFrames")
require("libs/Jumper.grid")
require("libs/Jumper.pathfinder")
require("libs/HardonCollider")
GS = require("libs/Hump.gamestate")

function love.load()
	love.graphics.setBackgroundColor( 220, 220, 255 )
	GS.registerEvents()
	GS.switch(menu)
end

function love.draw()

end

function love.update(dt)

end

function love.mousepressed(x, y, button)
 
end
 
function love.mousereleased(x, y, button) 
 
end

function love.keypressed(key, unicode)
	
end
 

function love.keyreleased(key)
	
end