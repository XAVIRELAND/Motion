#!/usr/bin/python


from wia import Wia
wia = Wia()
wia.access_token ='d_sk_rRAIym38IJ1KiYJplo9AfueQ'
wia.Event.publish(name='motion', data=1)
