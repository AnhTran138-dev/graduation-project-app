import { Feather } from '@expo/vector-icons';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import type { FunctionComponent } from 'react';
import React from 'react';
import { Image, LayoutChangeEvent, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import ScheduleBadge from '../schedule/schedule-bagde';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/nativewindui/Avatar';
import { Text } from '~/components/nativewindui/Text';
import CardBasic from '~/components/plugins/card-basic';
import { getScheduleStatusFromNumber } from '~/constants/enums';
import type { InspectionScheduleDetail } from '~/constants/models/report.model';
import { COLORS } from '~/theme/colors';

interface ReportInspectionScheduleProps {
  inspectionScheduleDetail: InspectionScheduleDetail;
}

const ReportInspectionSchedule: FunctionComponent<ReportInspectionScheduleProps> = ({
  inspectionScheduleDetail,
}) => {
  const [width, setWidth] = React.useState<number>(300);

  const handleLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };
  return (
    <CardBasic className="rounded-xl bg-white p-4 shadow-sm">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-lg font-bold text-gray-800">Thông tin lịch kiểm tra</Text>
        <ScheduleBadge statusName={getScheduleStatusFromNumber(inspectionScheduleDetail.status)} />
      </View>

      <View className="gap-4">
        {/* Technician Section */}
        <View className="rounded-lg bg-gray-50 p-3">
          <View className="mb-2 flex-row items-center gap-2">
            <Feather name="user" size={16} color={COLORS.gray} />
            <Text className="font-semibold text-gray-700">Kỹ thuật viên:</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Avatar alt={inspectionScheduleDetail.technicianName}>
              <AvatarImage source={{ uri: inspectionScheduleDetail.technicianAvatar }} />
              <AvatarFallback>
                <Text>{inspectionScheduleDetail.technicianName.charAt(0)}</Text>
              </AvatarFallback>
            </Avatar>
            <Text className="text-lg text-foreground">
              {inspectionScheduleDetail.technicianName}
            </Text>
          </View>
        </View>
      </View>

      {/* Inspection Details Section */}
      <View className="mt-4 rounded-lg bg-gray-50 p-3">
        <View className="mb-3">
          <View className="mb-1 flex-row items-center gap-2">
            <Feather name="map-pin" size={16} color={COLORS.gray} />
            <Text className="font-semibold text-gray-700">Địa chỉ kiểm tra:</Text>
          </View>
          <Text className="text-gray-400">{inspectionScheduleDetail.inspectionAddress}</Text>
        </View>

        <View>
          <View className="mb-1 flex-row items-center gap-2">
            <Feather name="clock" size={16} color={COLORS.gray} />
            <Text className="font-semibold text-gray-700">Thời gian kiểm tra:</Text>
          </View>
          <Text className="text-gray-400">
            {format(new Date(inspectionScheduleDetail.inspectionDate), "PPP 'lúc' HH:mm", {
              locale: vi,
            })}
          </Text>
        </View>
      </View>

      {/* Photos Section - Only shown if there are photos */}
      {inspectionScheduleDetail.photoUrls.length > 0 && (
        <View className="mt-2" onLayout={handleLayout}>
          <Text className="mb-2 font-semibold text-gray-700">Hình ảnh kiểm tra:</Text>
          <Carousel
            loop={false}
            width={width}
            height={300}
            data={inspectionScheduleDetail.photoUrls}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <View className="flex-1">
                <Image
                  source={{ uri: item }}
                  className="h-full w-full rounded-lg"
                  resizeMode="cover"
                />
              </View>
            )}
          />
        </View>
      )}

      {/* Note Section - Only shown if there's a note */}
      {inspectionScheduleDetail.note && (
        <View className="rounded-lg bg-yellow-50 p-3">
          <View className="mb-1 flex-row items-center gap-2">
            <Feather name="file-text" size={16} color={COLORS.gray} />
            <Text className="font-semibold text-gray-700">Ghi chú:</Text>
          </View>
          <Text className="italic text-gray-800">{inspectionScheduleDetail.note}</Text>
        </View>
      )}
    </CardBasic>
  );
};

export default ReportInspectionSchedule;
