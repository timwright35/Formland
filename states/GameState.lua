local game = {}

function game:init()
	AdvTiledLoader.path = "maps/"
	map = AdvTiledLoader.load("TestMap.tmx")
	map:setDrawRange(0, 0, map.width * map.tileWidth, map.height * map.tileHeight)
	camera:setBounds(0, 0, map.width * map.tileWidth - love.graphics.getWidth(), map.height * map.tileHeight - love.graphics.getHeight() )
end

function game:enter(previous)
	
end

function game:leave()

end

function game:draw()
	camera:set()
	
	love.graphics.setColor( 0, 0, 0 )
	love.graphics.rectangle("fill", player.x - player.w/2, player.y - player.h/2, player.w, player.h)
	love.graphics.setColor( 255, 255, 255 )
	
	map:draw()
	
	camera:unset()
end

function game:update(dt)
	if dt > 0.05 then
		dt = 0.05
	end
	
	player:update(dt)
	TEsound.cleanup()
	camera:setPosition( player.x - (love.graphics.getWidth()/2), player.y - (love.graphics.getHeight()/2))
end

function game:focus(f)
		if(f) then
			GS.switch(game)
		else
			GS.switch(pause)
		end

end

function game:mousepressed(x, y, button)

end

function game:mousereleased(x, y, button)

end

function game:keypressed(key)
	if (key == "d") then
		player:right()
	end
	if (key == "a") then
		player:left()
	end
	if (key == " ") or (key == "w") and not(hasJumped) then
		player:jump()
	end
	if (key == "k") then
		GS.switch(menu)
	end
	if (key == "p") then
		GS.switch(pause)
	end
end

function game:keyreleased(key)
	if (key == "a") or (key == "d") then
		player.x_vel = 0
	end
end

function game:joystickpressed(joystick, button)

end

function game:joystickreleased(joystick, button)

end

function game:errhand(msg)

end

function game:quit()

end

return game