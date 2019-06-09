import vrep
import sys, math
import keyboard 
#導入鍵盤
# child threaded script: 
# 內建使用 port 19997 若要加入其他 port, 在  serve 端程式納入
#simExtRemoteApiStart(19999)
  
vrep.simxFinish(-1)
  
clientID = vrep.simxStart('127.0.0.1', 19997, True, True, 5000, 5)
if clientID!= -1:
    print("Connected to remote server")
else:
    print('Connection not successful')
    sys.exit('Could not connect')

KickBallV = 360  
R_KickBallVel = (math.pi/180)*KickBallV
B_KickBallVel = -(math.pi/180)*KickBallV

errorCode,lrev_handle=vrep.simxGetObjectHandle(clientID,'lrev',vrep.simx_opmode_oneshot_wait)
errorCode,lmo_handle=vrep.simxGetObjectHandle(clientID,'lmo',vrep.simx_opmode_oneshot_wait)
errorCode,rrev_handle=vrep.simxGetObjectHandle(clientID,'rrev',vrep.simx_opmode_oneshot_wait)
errorCode,rmo_handle=vrep.simxGetObjectHandle(clientID,'rmo',vrep.simx_opmode_oneshot_wait)
#定義平移軸旋轉軸

def a1():
    errorCode=vrep.simxSetJointTargetVelocity(clientID,lmo_handle,-0.2,vrep.simx_opmode_oneshot_wait)
def d1():    
     errorCode=vrep.simxSetJointTargetVelocity(clientID,lmo_handle,0.2,vrep.simx_opmode_oneshot_wait)
def w1():    
     errorCode=vrep.simxSetJointTargetVelocity(clientID,lrev_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)
def s1():
     errorCode=vrep.simxSetJointTargetVelocity(clientID,lrev_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait)
     errorCode=vrep.simxSetJointTargetVelocity(clientID,lmo_handle,0,vrep.simx_opmode_oneshot_wait)
def j2():
     errorCode=vrep.simxSetJointTargetVelocity(clientID,rmo_handle,-0.2,vrep.simx_opmode_oneshot_wait)
def l2():  
     errorCode=vrep.simxSetJointTargetVelocity(clientID,rmo_handle,0.2,vrep.simx_opmode_oneshot_wait)
def i2():    
     errorCode=vrep.simxSetJointTargetVelocity(clientID,rrev_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait)
def k2():
     errorCode=vrep.simxSetJointTargetVelocity(clientID,rrev_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)
     errorCode=vrep.simxSetJointTargetVelocity(clientID,rmo_handle,0,vrep.simx_opmode_oneshot_wait)
#定義平移軸及旋轉軸的速度


vrep.simxStartSimulation(clientID,vrep.simx_opmode_oneshot_wait)
#開始

while True:
    try:
            if keyboard.is_pressed('a'):
                a1()
            elif keyboard.is_pressed('d'):
                d1()
            elif keyboard.is_pressed('w'):
                w1()
            elif keyboard.is_pressed('s'):    
                s1()
            elif keyboard.is_pressed('4'):    
                j2()
            elif keyboard.is_pressed('6'):
                l2()
            elif keyboard.is_pressed('8'):
                i2()
            elif keyboard.is_pressed('5'):    
                k2()
            else:
                pass
    except:
            break
#執行按建