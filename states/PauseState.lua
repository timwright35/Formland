local pause = {}
local lastState = {}

function pause:init()
	local text = loveframes.Create("text")
	text:SetText("Game is Paused")
	text:SetShadowColor(200,200,200,255)
	text:CenterWithinArea(0,0,love.window.getWidth(), love.window.getHeight())
end

function pause:enter(previous)
	self.lastState = previous
end

function pause:leave()
	
end

function pause:draw()
	loveframes.draw()
end

function pause:update(dt)	
	loveframes.update(dt)
end

function pause:focus(f)

end

function pause:mousepressed(x, y, button)
	if(self.lastState ~= nil) then
		GS.switch(self.lastState)
	else
	    GS.switch(menu)
	end
end

function pause:mousereleased(x, y, button)

end

function pause:keypressed(key)

end

function pause:keyreleased(key)

end

function pause:joystickpressed(joystick, button)

end

function pause:joystickreleased(joystick, button)

end

function pause:errhand(msg)

end

function pause:quit()

end

return pause