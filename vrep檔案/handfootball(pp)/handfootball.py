import vrep
import sys, math
import keyboard
# child threaded script: 
# 內建使用 port 19997 若要加入其他 port, 在  serve 端程式納入
#simExtRemoteApiStart(19999)
  
vrep.simxFinish(-1)
  
clientID = vrep.simxStart('127.0.0.1', 19997, True, True, 5000, 5)
KickBallV = 360
n=1
U_KickBallVel = (math.pi/180)*KickBallV
D_KickBallVel = -(math.pi/180)*KickBallV
if clientID!= -1:
    print("Connected to remote server")
else:
    print('Connection not successful')
    sys.exit('Could not connect')

errorCode,Sphere_handle=vrep.simxGetObjectHandle(clientID,'Sphere',vrep.simx_opmode_oneshot_wait)
errorCode,lmov_handle=vrep.simxGetObjectHandle(clientID,'lmov', vrep.simx_opmode_oneshot_wait)
errorCode,rmov_handle=vrep.simxGetObjectHandle(clientID,'rmov',vrep.simx_opmode_oneshot_wait)
errorCode,lrev_handle=vrep.simxGetObjectHandle(clientID,'lrev',vrep.simx_opmode_oneshot_wait)
errorCode,rrev_handle=vrep.simxGetObjectHandle(clientID,'rrev',vrep.simx_opmode_oneshot_wait)


vrep.simxSetJointTargetVelocity(clientID,lmov_handle,0,vrep.simx_opmode_oneshot_wait)
vrep.simxSetJointTargetVelocity(clientID,rmov_handle,0,vrep.simx_opmode_oneshot_wait)
vrep.simxSetJointTargetVelocity(clientID,lrev_handle,0,vrep.simx_opmode_oneshot_wait)
vrep.simxSetJointTargetVelocity(clientID,rrev_handle,0,vrep.simx_opmode_oneshot_wait)

vrep.simxStartSimulation(clientID,vrep.simx_opmode_oneshot_wait)
#vrep.simxSetJointTargetVelocity(clientID,P1_handle,5,vrep.simx_opmode_oneshot_wait)
while True:
    try:
            if keyboard.is_pressed('w'): 
                vrep.simxSetJointTargetVelocity(clientID,lrev_handle,U_KickBallVel ,vrep.simx_opmode_oneshot_wait)
            elif keyboard.is_pressed('x'):  
                vrep.simxSetJointTargetVelocity(clientID,lrev_handle,D_KickBallVel ,vrep.simx_opmode_oneshot_wait)
            elif keyboard.is_pressed('a'):  
                vrep.simxSetJointTargetVelocity(clientID,lmov_handle,-0.2,vrep.simx_opmode_oneshot_wait)
            elif keyboard.is_pressed('s'):  
                vrep.simxSetJointTargetVelocity(clientID,lmov_handle,0,vrep.simx_opmode_oneshot_wait)
            elif keyboard.is_pressed('d'):  
                vrep.simxSetJointTargetVelocity(clientID,lmov_handle,0.2,vrep.simx_opmode_oneshot_wait)
            elif keyboard.is_pressed('5'):  
                vrep.simxSetJointTargetVelocity(clientID,rrev_handle,U_KickBallVel ,vrep.simx_opmode_oneshot_wait)
            elif keyboard.is_pressed('0'):  
                vrep.simxSetJointTargetVelocity(clientID,rrev_handle,D_KickBallVel ,vrep.simx_opmode_oneshot_wait)
            elif keyboard.is_pressed('3'):  
                vrep.simxSetJointTargetVelocity(clientID,rmov_handle,-0.2,vrep.simx_opmode_oneshot_wait)
            elif keyboard.is_pressed('2'):  
                vrep.simxSetJointTargetVelocity(clientID,rmov_handle,0,vrep.simx_opmode_oneshot_wait)
            elif keyboard.is_pressed('1'):  
                vrep.simxSetJointTargetVelocity(clientID,rmov_handle,0.2,vrep.simx_opmode_oneshot_wait)
            else:
                pass
    except:
            break