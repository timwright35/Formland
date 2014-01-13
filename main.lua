-- Configurations
camera = require("camera")
player = require("player")
world = require("world")

-- Load States
require("states/LoadStates")

-- Libs
require("libs/LoadLibs")

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