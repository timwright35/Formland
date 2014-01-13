local menu = {}

function menu:init()
	local button = loveframes.Create("button")
	button:SetWidth(200)
	button:SetText("Play")
	button:CenterWithinArea(0,0,love.window.getWidth(), love.window.getHeight())
	
	button.OnClick = function(object, x, y)
		GS.switch(game)
	end
	
	button.OnMouseEnter = function(object)

	end
	
	button.OnMouseExit = function(object)

	end
end

function menu:enter(previous)

end

function menu:leave()

end

function menu:draw()
	loveframes.draw()
end

function menu:update(dt)	
	loveframes.update(dt)
end

function menu:focus(f)

end

function menu:mousepressed(x, y, button)
	loveframes.mousepressed(x, y, button)
end

function menu:mousereleased(x, y, button)
	loveframes.mousereleased(x, y, button)
end

function menu:keypressed(key)
	loveframes.keypressed(key)
end

function menu:keyreleased(key)
	loveframes.keyreleased(key)
end

function menu:joystickpressed(joystick, button)

end

function menu:joystickreleased(joystick, button)

end

function menu:errhand(msg)

end

function menu:quit()

end

return menu