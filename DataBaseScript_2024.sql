USE [master]
GO
/***** Object:  Database [FinalDistributionDb]    Script Date: 31/03/2024 11:46:00 PM ******/
CREATE DATABASE [FinalDistributionDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'FinalDistributionDb', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\FinalDistributionDb.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'FinalDistributionDb_log', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\FinalDistributionDb_log.ldf' , SIZE = 1280KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [FinalDistributionDb] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [FinalDistributionDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [FinalDistributionDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [FinalDistributionDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [FinalDistributionDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [FinalDistributionDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [FinalDistributionDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [FinalDistributionDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [FinalDistributionDb] SET  MULTI_USER 
GO
ALTER DATABASE [FinalDistributionDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [FinalDistributionDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [FinalDistributionDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [FinalDistributionDb] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [FinalDistributionDb]
GO
/****** Object:  Table [dbo].[Tbl_AccountsHead]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_AccountsHead](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Code] [bigint] NULL,
	[Name] [nvarchar](max) NULL,
 CONSTRAINT [PK_Tbl_AccountsHead] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_Customer]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Customer](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CCode] [bigint] NULL,
	[CustomerName] [nvarchar](max) NULL,
	[CompanyName] [nvarchar](max) NULL,
	[Mobile] [nvarchar](max) NULL,
	[Address] [nvarchar](max) NULL,
	[Debit] [decimal](18, 2) NULL,
	[Credit] [decimal](18, 2) NULL,
	[Balance] [decimal](18, 2) NULL,
	[Date] [nvarchar](max) NULL,
 CONSTRAINT [PK_Tbl_Customer] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_CustomerBook]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_CustomerBook](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SaleID] [bigint] NULL,
	[CCode] [bigint] NULL,
	[Customer] [nvarchar](max) NULL,
	[Company] [nvarchar](max) NULL,
	[Narrations] [nvarchar](max) NULL,
	[GatePass] [nvarchar](max) NULL,
	[Debit] [decimal](18, 2) NULL,
	[Credit] [decimal](18, 2) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_Tbl_CustomerBook] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_Payment]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Payment](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Narration] [nvarchar](max) NULL,
	[Status] [int] NULL,
	[Payment] [decimal](18, 2) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_Tbl_Payment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_PurchaseInvoice]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_PurchaseInvoice](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[POID] [bigint] NULL,
	[VCode] [bigint] NULL,
	[VendorName] [nvarchar](max) NULL,
	[Factory] [nvarchar](max) NULL,
	[Name] [nvarchar](max) NULL,
	[Contact] [nvarchar](max) NULL,
	[ReceivedBy] [nvarchar](max) NULL,
	[PayReceivedBy] [nvarchar](max) NULL,
	[GatePass] [nvarchar](max) NULL,
	[VehicleNo] [nvarchar](max) NULL,
	[PurchaseAmt] [decimal](18, 4) NULL,
	[Discount] [decimal](18, 4) NULL,
	[TotalAmt] [decimal](18, 4) NULL,
	[Payment] [decimal](18, 4) NULL,
	[Date] [date] NULL,
	[DDate] [date] NULL,
	[CDate] [nvarchar](max) NULL,
	[ITime] [nvarchar](max) NULL,
 CONSTRAINT [PK_Tbl_PurchaseInvoice] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_PurchaseInvoiceItem]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_PurchaseInvoiceItem](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[POID] [bigint] NULL,
	[Barcode] [int] NULL,
	[BatchNo] [nvarchar](max) NULL,
	[Item] [nvarchar](max) NULL,
	[Size] [nvarchar](max) NULL,
	[Unit] [nvarchar](max) NULL,
	[Rate] [decimal](18, 4) NULL,
	[SaleRate] [decimal](18, 4) NULL,
	[PackQty] [decimal](18, 4) NULL,
	[Qty] [decimal](18, 4) NULL,
	[Total] [decimal](18, 4) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_Tbl_PurchaseInvoiceItem] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_Register]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Register](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[CNIC] [nvarchar](50) NULL,
	[Mobile] [nvarchar](50) NULL,
	[Address] [nvarchar](50) NULL,
	[Date] [nvarchar](50) NULL,
	[Role] [nvarchar](50) NULL,
	[Salary] [decimal](18, 2) NULL,
 CONSTRAINT [PK_Tbl_Register] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_Rider]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Rider](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[RCode] [bigint] NULL,
	[Name] [nvarchar](max) NULL,
	[Contact] [nvarchar](max) NULL,
	[Address] [nvarchar](max) NULL,
 CONSTRAINT [PK_Tbl_Rider] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_SaleInvoice]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_SaleInvoice](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SaleID] [bigint] NULL,
	[CCode] [bigint] NULL,
	[CustomerName] [nvarchar](max) NULL,
	[Company] [nvarchar](max) NULL,
	[Name] [nvarchar](max) NULL,
	[Contact] [nvarchar](max) NULL,
	[ReceivedBy] [nvarchar](max) NULL,
	[PayReceivedBy] [nvarchar](max) NULL,
	[GatePass] [nvarchar](max) NULL,
	[VehicleNo] [nvarchar](max) NULL,
	[CostAmt] [decimal](18, 4) NULL,
	[SaleAmt] [decimal](18, 4) NULL,
	[Discount] [decimal](18, 4) NULL,
	[TotalAmt] [decimal](18, 4) NULL,
	[Charges] [decimal](18, 4) NULL,
	[NetTotal] [decimal](18, 4) NULL,
	[Payment] [decimal](18, 4) NULL,
	[Date] [date] NULL,
	[DDate] [date] NULL,
	[ITime] [nvarchar](max) NULL,
 CONSTRAINT [PK_Tbl_SaleInvoice] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_SaleInvoiceItem]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_SaleInvoiceItem](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SaleID] [bigint] NULL,
	[Barcode] [int] NULL,
	[BatchNo] [nvarchar](max) NULL,
	[Item] [nvarchar](max) NULL,
	[Size] [nvarchar](max) NULL,
	[Unit] [nvarchar](max) NULL,
	[CostRate] [decimal](18, 4) NULL,
	[SaleRate] [decimal](18, 4) NULL,
	[Qty] [decimal](18, 4) NULL,
	[CostTotal] [decimal](18, 4) NULL,
	[SaleTotal] [decimal](18, 4) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_Tbl_SaleInvoiceItem] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_SaleInvoiceItemMarbel]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_SaleInvoiceItemMarbel](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SaleID] [bigint] NULL,
	[Barcode] [int] NULL,
	[Item] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[CostRate] [decimal](18, 2) NULL,
	[SaleRate] [decimal](18, 2) NULL,
	[AMeasure] [nvarchar](max) NULL,
	[Measure] [nvarchar](max) NULL,
	[AFeet] [decimal](18, 3) NULL,
	[Feet] [decimal](18, 3) NULL,
	[Pcs] [decimal](18, 2) NULL,
	[TotalAFeet] [decimal](18, 3) NULL,
	[TotalFeet] [decimal](18, 3) NULL,
	[DeliveredQty] [decimal](18, 2) NULL,
	[RemainingQty] [decimal](18, 2) NULL,
	[CostTotal] [decimal](18, 1) NULL,
	[SaleTotal] [decimal](18, 2) NULL,
 CONSTRAINT [PK_Tbl_SaleInvoiceItemMarbel] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_SaleInvoiceItemMarbelLedger]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_SaleInvoiceItemMarbelLedger](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SaleID] [bigint] NULL,
	[Barcode] [int] NULL,
	[Item] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[AMeasure] [nvarchar](max) NULL,
	[Measure] [nvarchar](max) NULL,
	[Pcs] [decimal](18, 2) NULL,
	[DeliveredQty] [decimal](18, 2) NULL,
	[RemainingQty] [decimal](18, 2) NULL,
	[IssueQty] [decimal](18, 2) NULL,
 CONSTRAINT [PK_Tbl_SaleInvoiceItemMarbelLedger] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_SaleInvoiceLedger]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_SaleInvoiceLedger](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SaleID] [bigint] NULL,
	[CCode] [bigint] NULL,
	[CustomerName] [nvarchar](max) NULL,
	[Company] [nvarchar](max) NULL,
	[Name] [nvarchar](max) NULL,
	[Contact] [nvarchar](max) NULL,
	[ReceivedBy] [nvarchar](max) NULL,
	[PayReceivedBy] [nvarchar](max) NULL,
	[GatePass] [nvarchar](max) NULL,
	[VehicleNo] [nvarchar](max) NULL,
	[Total] [decimal](18, 2) NULL,
	[Paid] [decimal](18, 2) NULL,
	[Balance] [decimal](18, 2) NULL,
	[Payment] [decimal](18, 2) NULL,
	[NetBalance] [decimal](18, 2) NULL,
	[Date] [date] NULL,
	[ITime] [nvarchar](max) NULL,
 CONSTRAINT [PK_Tbl_SaleInvoiceLedger] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_SaleReport]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_SaleReport](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Barcode] [bigint] NULL,
	[Item] [nvarchar](max) NULL,
	[Size] [nvarchar](max) NULL,
	[Unit] [nvarchar](max) NULL,
	[CostRate] [decimal](18, 2) NULL,
	[SaleRate] [decimal](18, 2) NULL,
	[Qty] [decimal](18, 3) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_Tbl_SaleReport] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_Vendor]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_Vendor](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[VCode] [bigint] NULL,
	[VendorName] [nvarchar](max) NULL,
	[FactoryName] [nvarchar](max) NULL,
	[Mobile] [nvarchar](max) NULL,
	[Address] [nvarchar](max) NULL,
	[Debit] [decimal](18, 2) NULL,
	[Credit] [decimal](18, 2) NULL,
	[Balance] [decimal](18, 2) NULL,
	[Date] [nvarchar](max) NULL,
 CONSTRAINT [PK_Tbl_Vendor] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Tbl_VendorBook]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tbl_VendorBook](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[POID] [bigint] NULL,
	[VCode] [bigint] NULL,
	[VendorName] [nvarchar](max) NULL,
	[Factory] [nvarchar](max) NULL,
	[Narrations] [nvarchar](max) NULL,
	[GatePass] [nvarchar](max) NULL,
	[Debit] [decimal](18, 2) NULL,
	[Credit] [decimal](18, 2) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_Tbl_VendorBook] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblAccounts]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblAccounts](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountNo] [bigint] NULL,
	[AccountName] [nvarchar](max) NULL,
	[Contact] [nvarchar](max) NULL,
	[Address] [nvarchar](max) NULL,
 CONSTRAINT [PK_TblAccounts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblExpense]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblExpense](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountNo] [bigint] NULL,
	[AccountName] [nvarchar](max) NULL,
	[AccountHeadNo] [bigint] NULL,
	[AccountHeadName] [nvarchar](max) NULL,
	[Details] [nvarchar](max) NULL,
	[Name] [nvarchar](max) NULL,
	[Debit] [decimal](18, 2) NULL,
	[Credit] [decimal](18, 2) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_TblExpense] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblExpenseReport]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblExpenseReport](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountNo] [bigint] NULL,
	[AccountName] [nvarchar](max) NULL,
	[AccountHeadNo] [bigint] NULL,
	[AccountHeadName] [nvarchar](max) NULL,
	[Details] [nvarchar](max) NULL,
	[Name] [nvarchar](max) NULL,
	[Debit] [decimal](18, 2) NULL,
	[Credit] [decimal](18, 2) NULL,
 CONSTRAINT [PK_TblExpenseReport] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblInOutAccount]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblInOutAccount](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountCode] [bigint] NULL,
	[AccountName] [nvarchar](max) NULL,
 CONSTRAINT [PK_TblInOutAccount] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblInOutBook]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblInOutBook](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AccountCode] [bigint] NULL,
	[AccountName] [nvarchar](max) NULL,
	[NamePerson] [nvarchar](max) NULL,
	[Detail] [nvarchar](max) NULL,
	[PayIn] [decimal](18, 2) NULL,
	[PayOut] [decimal](18, 2) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_TblInOutBook] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblProfile]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblProfile](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Navbar_Name] [nvarchar](max) NULL,
	[Dashboard_Name] [nvarchar](max) NULL,
	[Receipt_Name] [nvarchar](max) NULL,
	[Address] [nvarchar](max) NULL,
	[MobileNo] [nvarchar](max) NULL,
	[Phone] [nvarchar](max) NULL,
	[Details] [nvarchar](max) NULL,
	[Software_Company] [nvarchar](max) NULL,
	[Company_Contact] [nvarchar](max) NULL,
	[Date] [nvarchar](max) NULL,
 CONSTRAINT [PK_TblProfile] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblPurchaseItem]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblPurchaseItem](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Barcode] [bigint] NULL,
	[BatchNo] [nvarchar](max) NULL,
	[Item] [nvarchar](max) NULL,
	[Size] [nvarchar](max) NULL,
	[Colour] [nvarchar](max) NULL,
	[Unit] [nvarchar](max) NULL,
	[CostRate] [decimal](18, 4) NULL,
	[SaleRate] [decimal](18, 4) NULL,
	[PackQty] [decimal](18, 4) NULL,
	[StockInHand] [decimal](18, 4) NULL,
	[Stock] [decimal](18, 4) NULL,
 CONSTRAINT [PK_TblPurchaseItem] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblReceipis]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblReceipis](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[SaleItemCode] [int] NULL,
	[SaleItem] [nvarchar](max) NULL,
	[PurchaseItemCode] [int] NULL,
	[PurchaseItem] [nvarchar](max) NULL,
	[PackQty] [decimal](18, 2) NULL,
	[Pack] [decimal](18, 2) NULL,
	[StockInHand] [decimal](18, 2) NULL,
 CONSTRAINT [PK_TblReceipis] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblSaleItem]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblSaleItem](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Barcode] [bigint] NULL,
	[Item] [nvarchar](max) NULL,
	[Size] [nvarchar](max) NULL,
	[Colour] [nvarchar](max) NULL,
	[Unit] [nvarchar](max) NULL,
	[CostRate] [decimal](18, 2) NULL,
	[SaleRate] [decimal](18, 2) NULL,
	[PackQty] [decimal](18, 2) NULL,
	[StockInHand] [decimal](18, 2) NULL,
	[Stock] [decimal](18, 2) NULL,
 CONSTRAINT [PK_TblSaleItem] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblSaleItemAdjustment]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblSaleItemAdjustment](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Barcode] [int] NULL,
	[Item] [nvarchar](max) NULL,
	[Description] [text] NULL,
	[StockIn] [decimal](18, 2) NULL,
	[StockOut] [decimal](18, 2) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_TblSaleItemAdjustment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblStockAdjustment]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblStockAdjustment](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Barcode] [int] NULL,
	[BatchNo] [nvarchar](max) NULL,
	[Item] [nvarchar](max) NULL,
	[Description] [text] NULL,
	[StockIn] [decimal](18, 4) NULL,
	[StockOut] [decimal](18, 4) NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_TblStockAdjustment] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblStockReport]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblStockReport](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Barcode] [bigint] NULL,
	[BatchNo] [nvarchar](max) NULL,
	[Item] [nvarchar](max) NULL,
	[Size] [nvarchar](max) NULL,
	[Colour] [nvarchar](max) NULL,
	[Unit] [nvarchar](max) NULL,
	[CostRate] [decimal](18, 4) NULL,
	[SaleRate] [decimal](18, 4) NULL,
	[PackQty] [decimal](18, 4) NULL,
	[Stock] [decimal](18, 4) NULL,
	[SoldStock] [decimal](18, 4) NULL,
 CONSTRAINT [PK_TblStockReport] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TblStockSoldReport]    Script Date: 31/03/2024 11:46:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblStockSoldReport](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Barcode] [bigint] NULL,
	[BatchNo] [nvarchar](max) NULL,
	[Item] [nvarchar](max) NULL,
	[Size] [nvarchar](max) NULL,
	[Colour] [nvarchar](max) NULL,
	[Unit] [nvarchar](max) NULL,
	[CostRate] [decimal](18, 4) NULL,
	[SaleRate] [decimal](18, 4) NULL,
	[PackQty] [decimal](18, 4) NULL,
	[Stock] [decimal](18, 4) NULL,
	[SoldStock] [decimal](18, 4) NULL,
 CONSTRAINT [PK_TblStockSoldReport] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
USE [master]
GO
ALTER DATABASE [FinalDistributionDb] SET  READ_WRITE 
GO
